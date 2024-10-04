import z from "zod";

export const themeSchema = z.object({
  name: z.string(),
  class: z.string(),
  color: z.string(),
});
