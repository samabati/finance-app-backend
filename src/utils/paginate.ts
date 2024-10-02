import { Transaction } from "@prisma/client";

export const paginateData = (transactions: Transaction[], page: number) => {
  let limit = 10;
  let start = (page - 1) * 10;
  return transactions.slice(start, start + limit);
};
