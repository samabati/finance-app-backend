import { Request, Response } from "express";
import { createBudgetSchema, updateBudgetSchema } from "../schemas/budgets";
import { prismaClient } from "..";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCodes } from "../exceptions/root";
import Decimal from "decimal.js";

const getBudgets = async (req: Request, res: Response) => {
  const id = req.user.id;

  const budgets = await prismaClient.budget.findMany({ where: { userId: id } });

  res.json(budgets);
};

const createBudgets = async (req: Request, res: Response) => {
  createBudgetSchema.parse(req.body);
  const id = req.user.id;

  if (id === 1) {
    return res.status(200).json({ message: "Skipping demo account" });
  }

  const transactions = await prismaClient.transaction.findMany({
    where: {
      category: req.body.category,
    },
  });

  const spent = transactions
    .filter((transaction) => +transaction.amount < 0)
    .reduce(
      (a, b) => a.abs().plus(new Decimal(b.amount).abs()),
      new Decimal(0)
    );

  const budget = await prismaClient.budget.create({
    data: {
      ...req.body,
      userId: id,
      spent,
    },
  });

  res.status(200).json(budget);
};

const updateBudgets = async (req: Request, res: Response) => {
  updateBudgetSchema.parse(req.body);
  const budgetId = req.params.id;
  const userId = req.user.id;

  if (userId === 1) {
    return res.status(200).json({ message: "Skipping demo account" });
  }

  const budget = await prismaClient.budget.update({
    where: {
      id: +budgetId,
      userId,
    },
    data: {
      ...req.body,
    },
  });

  res.status(200).json(budget);
};

const deleteBudgets = async (req: Request, res: Response) => {
  const budgetId = req.params.id;
  const userId = req.user.id;

  if (userId === 1) {
    return res.status(200).json({ message: "Skipping demo account" });
  }

  const budget = await prismaClient.budget.delete({
    where: {
      id: +budgetId,
      userId,
    },
  });

  res.json(budget);
};

export { getBudgets, createBudgets, updateBudgets, deleteBudgets };
