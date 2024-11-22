import { z } from "zod";

const FiltersSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().default(10),
});

export const InputSchema = z.object({
  filters: FiltersSchema,
});
