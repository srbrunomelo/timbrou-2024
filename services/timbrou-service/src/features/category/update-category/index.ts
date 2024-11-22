import type { TLogger } from "@/adapters/logger";
import { CategoryUpdateSchema } from "@/entities/category";
import { safeValidation } from "@/shared/validations/zod";
import dj from "@repo/dependency-injection";
import { type TError, left, right } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";
import type { TExecInput, TExecOutput } from "./types";

export async function UpdateCategory(
	input: TExecInput,
	ctx = {
		logger: dj.resolve<TLogger>("Logger"),
		query: dj.resolve<Payload>("Query"),
	},
): Promise<TExecOutput> {
	const logger = ctx.logger.extend("update-category");
	const query = ctx.query;

	const { success, errors } = safeValidation(CategoryUpdateSchema, input.data);
	if (!success) {
		return left(errors as TError);
	}

  logger.info("Updating category", { input });
	try {
		const category = await query.update({
			collection: "categories",
			id: input.id,
			data: input.data,
		});
		return right(category);
	} catch (error) {
		logger.error("Error updating category", { error });
		return left({
			code: 400,
			message: String(error),
		});
	}
}
