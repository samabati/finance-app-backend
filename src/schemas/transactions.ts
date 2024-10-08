import z from "zod";

export const createBatchTransactionsSchema = z.object({
  avatar: z.string(),
  name: z.string(),
  category: z.string(),
  date: z.string(),
  amount: z.number(),
  recurring: z.boolean(),
});

export const getRecurringSchema = z.object({
  search: z.string(),
  sort: z.string(),
});
