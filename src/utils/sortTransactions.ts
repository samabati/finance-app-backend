import { Transaction } from "@prisma/client";

export const sortTransactions = (data: Transaction[], sortValue: string) => {
  if (sortValue === "Latest")
    return data.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  else if (sortValue === "Oldest")
    return data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  else if (sortValue === "A to Z")
    return data.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortValue === "Z to A")
    return data.sort((a, b) => b.name.localeCompare(a.name));
  else if (sortValue === "Highest")
    return data.sort((a, b) => +b.amount - +a.amount);
  else if (sortValue === "Lowest")
    return (data = data.sort((a, b) => +a.amount - +b.amount));
  else return data;
};
