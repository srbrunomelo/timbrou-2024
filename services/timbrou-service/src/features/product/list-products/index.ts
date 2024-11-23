import type { TLogger } from "@/adapters/logger";
import type { TCategory } from "@/entities/category";
import dj from "@repo/dependency-injection";
import { left, right } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";
import type { TExecInput, TExecOutput } from "./types";
import { TProduct } from "@/entities/product";

export async function ListProducts(
  input: TExecInput,
  ctx = {
    logger: dj.resolve<TLogger>("Logger"),
    query: dj.resolve<Payload>("Query"),
  },
): Promise<TExecOutput> {
  const logger = ctx.logger.extend("list-products");
  const query = ctx.query;

  try {
    const products = await query.find({
      collection: "products",
      limit: input.filters.limit,
      page: input.filters.page,
    });
    return right({
      products: products.docs as Array<TProduct>,
      total: products.totalDocs,
      limit: products.limit,
      page: products.page,
      pages: products.totalPages,
    });
  } catch (error) {
    logger.error("Error creating user", { error });
    return left({
      code: 400,
      message: String(error),
    });
  }
}
