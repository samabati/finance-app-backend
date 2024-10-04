import z from "zod";
import { themeSchema } from "./themes";

export const createPotsSchema = z.object({
  name: z.string().max(30),
  saved: z.number().optional(),
  target: z.number(),
  theme: themeSchema,
});

export const updatePotsSchema = createPotsSchema;

export const addFundsSchema = z.object({
  saved: z.number(),
});

export const withdrawFundsSchema = addFundsSchema;
