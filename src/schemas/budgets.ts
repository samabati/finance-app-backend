import z from "zod";

export const createBudgetSchema = z.object({
  category: z.string(),
  spent: z.number().optional(),
  max: z.number(),
  theme: z.string(),
});

export const updateBudgetSchema = z.object({
  category: z.string(),
  max: z.number(),
  theme: z.string(),
});
