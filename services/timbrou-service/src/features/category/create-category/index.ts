import type { TLogger } from "@/adapters/logger";
import { CategoryCreateSchema } from "@/entities/category";
import { safeValidation } from "@/shared/validations/zod";
import dj from "@repo/dependency-injection";
import { type TError, left, right } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";
import type { TExecInput, TExecOutput } from "./types";

export async function CreateCategory(
  input: TExecInput,
  ctx = {
    logger: dj.resolve<TLogger>("Logger"),
    query: dj.resolve<Payload>("Query"),
  },
): Promise<TExecOutput> {
  const logger = ctx.logger.extend("create-category");
  const query = ctx.query;

  const { success, errors } = safeValidation(CategoryCreateSchema, input);
  if (!success) {
    return left(errors as TError);
  }

  try {
    const category = await query.create({
      collection: "categories",
      data: input,
    });
    return right({
      categoryId: category.id as string,
    });
  } catch (error) {
    logger.error("Error creating category", { error });
    return left({
      code: 400,
      message: String(error),
    });
  }
}
