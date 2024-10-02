import { Request, Response, NextFunction } from "express";
import {
  addFundsSchema,
  createPotsSchema,
  updatePotsSchema,
  withdrawFundsSchema,
} from "../schemas/pots";
import { prismaClient } from "..";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCodes } from "../exceptions/root";

const getPots = async (req: Request, res: Response, next: NextFunction) => {
  const userId: number = req.user.id;

  const pots = await prismaClient.pot.findMany({ where: { userId } });

  res.status(200).json(pots);
};

const createPot = async (req: Request, res: Response, next: NextFunction) => {
  createPotsSchema.parse(req.body);
  const userId: number = req.user.id;
  const pot = await prismaClient.pot.create({
    data: {
      ...req.body,
      userId,
    },
  });

  res.status(200).json(pot);
};

const updatePot = async (req: Request, res: Response, next: NextFunction) => {
  updatePotsSchema.parse(req.body);
  const userId: number = req.user.id;
  const id: number = +req.params.id;
  const pot = await prismaClient.pot.update({
    where: {
      userId,
      id,
    },
    data: {
      ...req.body,
    },
  });

  res.status(200).json(pot);
};

const deletePot = async (req: Request, res: Response, next: NextFunction) => {
  const userId: number = req.user.id;
  const id: number = +req.params.id;
  const pot = await prismaClient.pot.delete({
    where: {
      userId,
      id,
    },
  });

  res.status(200).json(pot);
};

const addFunds = async (req: Request, res: Response, next: NextFunction) => {
  addFundsSchema.parse(req.body);
  const { saved } = req.body;
  const id: number = +req.params.id;
  const userId: number = req.user.id;
  let pot = await prismaClient.pot.findFirst({ where: { id, userId } });
  if (!pot)
    throw new BadRequestException(
      "Pot does not exist",
      ErrorCodes.POT_DOES_NOT_EXIST
    );

  if (saved > pot.target)
    throw new BadRequestException(
      "Pot saved cannot exceed target",
      ErrorCodes.POT_SAVED_EXCEEDS_TARGET
    );

  pot = await prismaClient.pot.update({
    where: { id, userId },
    data: { saved },
  });

  res.status(200).json(pot);
};

const withdrawFunds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  withdrawFundsSchema.parse(req.body);
  const { saved } = req.body;
  const id: number = +req.params.id;
  const userId: number = req.user.id;
  let pot = await prismaClient.pot.findFirst({ where: { id, userId } });
  if (!pot)
    throw new BadRequestException(
      "Pot does not exist",
      ErrorCodes.POT_DOES_NOT_EXIST
    );

  if (saved < 0)
    throw new BadRequestException(
      "Pot saved cannot exceed target",
      ErrorCodes.POT_SAVED_CANNOT_BE_NEGATIVE
    );

  pot = await prismaClient.pot.update({
    where: { id, userId },
    data: { saved },
  });

  res.status(200).json(pot);
};

export { getPots, createPot, updatePot, deletePot, addFunds, withdrawFunds };
