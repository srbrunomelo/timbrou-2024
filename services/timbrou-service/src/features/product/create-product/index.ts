import type { TLogger } from "@/adapters/logger";
import { ProductCreateSchema } from "@/entities/product";
import { safeValidation } from "@/shared/validations/zod";
import dj from "@repo/dependency-injection";
import { type TError, left, right } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";
import type { TExecInput, TExecOutput } from "./types";

export async function CreateProduct(
  input: TExecInput,
  ctx = {
    logger: dj.resolve<TLogger>("Logger"),
    query: dj.resolve<Payload>("Query"),
  },
): Promise<TExecOutput> {
  const logger = ctx.logger.extend("create-product");
  const query = ctx.query;

  const { success, errors } = safeValidation(ProductCreateSchema, input);
  if (!success) {
    return left(errors as TError);
  }

  try {
    const product = await query.create({
      collection: "products",
      data: input,
    });
    return right({
      productId: product.id as string,
    });
  } catch (error) {
    logger.error("Error creating product", { error });
    return left({
      code: 400,
      message: String(error),
    });
  }
}
