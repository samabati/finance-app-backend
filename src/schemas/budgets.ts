import z from "zod";
import { themeSchema } from "./themes";

export const createBudgetSchema = z.object({
  category: z.string(),
  spent: z.number().optional(),
  max: z.number(),
  theme: themeSchema,
});

export const updateBudgetSchema = z.object({
  category: z.string(),
  max: z.number(),
  theme: themeSchema,
});
