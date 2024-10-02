import { Transaction } from "@prisma/client";

export const filterCategory = (
  transactions: Transaction[],
  category: string
) => {
  let data = transactions;
  if (category !== "All Transactions")
    data = data.filter((value) => value.category === category);
  return data;
};
