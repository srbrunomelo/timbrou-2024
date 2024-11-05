import type { TLogger } from "@/adapters/logger";
import dj from "@repo/dependency-injection";
import { left, right } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";
import type { TExecInput, TExecOutput } from "./types";

export async function CreateUser(
	input: TExecInput,
	ctx = {
		logger: dj.resolve<TLogger>("Logger"),
		query: dj.resolve<Payload>("Query"),
	},
): Promise<TExecOutput> {
	const logger = ctx.logger.extend("create-user");
	const query = ctx.query;

	try {
		logger.info("Creating user", { input });
		await query.create({
			collection: "users",
			data: {
				name: `${input.firstName} ${input.lastName}`,
				email: input.email,
				external_id: input.id,
			},
		});
		return right(true);
	} catch (error) {
		logger.error("Error creating user", { error });
		return left({
			code: 400,
			message: String(error),
		});
	}
}
