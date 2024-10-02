import { Request, Response } from "express";
import { createBudgetSchema, updateBudgetSchema } from "../schemas/budgets";
import { prismaClient } from "..";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCodes } from "../exceptions/root";

const getBudgets = async (req: Request, res: Response) => {
  const id = req.user.id;

  const budgets = await prismaClient.budget.findMany({ where: { userId: id } });

  res.json(budgets);
};

const createBudgets = async (req: Request, res: Response) => {
  createBudgetSchema.parse(req.body);

  const { category, spent, max, theme } = req.body;
  const id = req.user.id;

  const user = await prismaClient.user.findFirst({ where: { id: id } });

  if (!user)
    throw new BadRequestException(
      "User ID does not exist",
      ErrorCodes.USER_DOES_NOT_EXIST
    );

  const budget = await prismaClient.budget.create({
    data: {
      ...req.body,
      userId: id,
    },
  });

  res.status(200).json(budget);
};

const updateBudgets = async (req: Request, res: Response) => {
  updateBudgetSchema.parse(req.body);
  const budgetId = req.params.id;
  const { category, max, spent } = req.body;
};

const deleteBudgets = async (req: Request, res: Response) => {
  res.send("Delete budget");
};

export { getBudgets, createBudgets, updateBudgets, deleteBudgets };
