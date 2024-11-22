import type { TLogger } from "@/adapters/logger";
import type { TCategory } from "@/entities/category";
import dj from "@repo/dependency-injection";
import { left, right } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";
import type { TExecInput, TExecOutput } from "./types";

export async function ListCategories(
  input: TExecInput,
  ctx = {
    logger: dj.resolve<TLogger>("Logger"),
    query: dj.resolve<Payload>("Query"),
  },
): Promise<TExecOutput> {
  const logger = ctx.logger.extend("list-categories");
  const query = ctx.query;

  try {
    const categories = await query.find({
      collection: "categories",
      limit: input.filters.limit,
      page: input.filters.page,
    });
    return right({
      categories: categories.docs as Array<TCategory>,
      total: categories.totalDocs,
      limit: categories.limit,
      page: categories.page,
      pages: categories.totalPages,
    });
  } catch (error) {
    logger.error("Error creating user", { error });
    return left({
      code: 400,
      message: String(error),
    });
  }
}
