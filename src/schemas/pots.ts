import z from "zod";

export const createPotsSchema = z.object({
  name: z.string().max(30),
  target: z.number(),
  theme: z.string(),
});

export const updatePotsSchema = createPotsSchema;

export const addFundsSchema = z.object({
  saved: z.number(),
});

export const withdrawFundsSchema = addFundsSchema;
