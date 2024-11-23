import type { TLogger } from "@/adapters/logger";
import { ProductUpdateSchema } from "@/entities/product";
import { safeValidation } from "@/shared/validations/zod";
import dj from "@repo/dependency-injection";
import { type TError, left, right } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";
import type { TExecInput, TExecOutput } from "./types";

export async function UpdateProduct(
	input: TExecInput,
	ctx = {
		logger: dj.resolve<TLogger>("Logger"),
		query: dj.resolve<Payload>("Query"),
	},
): Promise<TExecOutput> {
	const logger = ctx.logger.extend("update-product");
	const query = ctx.query;

	const { success, errors } = safeValidation(ProductUpdateSchema, input.data);
	if (!success) {
		return left(errors as TError);
	}

  logger.info("Updating product", { input });
	try {
		const product = await query.update({
			collection: "products",
			id: input.id,
			data: input.data,
		});
		return right(product);
	} catch (error) {
		logger.error("Error updating product", { error });
		return left({
			code: 400,
			message: String(error),
		});
	}
}
