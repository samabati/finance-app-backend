import { Request, Response, NextFunction } from "express";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCodes } from "../exceptions/root";
import {
  createBatchTransactionsSchema,
  getRecurringSchema,
} from "../schemas/transactions";
import { UnprocessableEntity } from "../exceptions/unprocessable";
import { prismaClient } from "..";
import { filterCategory } from "../utils/filterCategory";
import { paginateData } from "../utils/paginate";
import { removeDuplicates } from "../utils/removeDuplicates";
import { sortBills } from "../utils/sortRecurring";
import { sortTransactions } from "../utils/sortTransactions";

const getTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { search, category, sort, page } = req.query as any;

  let transactions = await prismaClient.transaction.findMany();

  if (search)
    transactions = transactions.filter((item) =>
      item.name.toLowerCase().includes(search)
    );

  transactions = filterCategory(transactions, category);

  const totalPages = transactions.length;

  transactions = sortTransactions(transactions, sort);

  transactions = paginateData(transactions, +page);

  res.status(200).json({ transactions, totalPages });
};

const createBatchTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!Array.isArray(req.body))
    throw new UnprocessableEntity(
      "Must contain more than one transaction",
      ErrorCodes.NOT_ENOUGH_TRANSACTIONS,
      null
    );

  req.body.forEach((obj) => createBatchTransactionsSchema.parse(obj));

  const id: number = req.user.id;
  if (!(id === 2))
    throw new UnauthorizedException(
      "Only Sam can create batch transactions >:(",
      ErrorCodes.NOT_SAM
    );

  let transactions = await prismaClient.transaction.createMany({
    data: req.body,
  });

  res.status(200).json(transactions);
};

const getRecurring = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getRecurringSchema.parse(req.query);

  const { search, sort } = req.query as any;

  let recurring = await prismaClient.transaction.findMany({
    where: {
      recurring: true,
    },
  });

  /* Remove duplicates */

  recurring = removeDuplicates(recurring, "name");

  if (search)
    recurring = recurring.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  recurring = sortBills(recurring, sort);

  res.json(recurring);
};

export { getTransactions, createBatchTransactions, getRecurring };
