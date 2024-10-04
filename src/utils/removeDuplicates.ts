import { Transaction } from "@prisma/client";

export const removeDuplicates = (array: Transaction[], key: string) => {
  return array.filter(
    (obj: any, index, self) =>
      index === self.findIndex((t: any) => t[key] === obj[key])
  );
};
