import type { TLogger } from "@/shared/adapters/logger";
import dj from "@repo/dependency-injection";
import { type TLeftRightReturn, right } from "@repo/utils/patterns/left-right";
import type {
	TUserCreatedStrategyInput,
	TUserCreatedStrategyOutput,
} from "./types";

export async function UserCreatedStrategy(
	input: TUserCreatedStrategyInput,
	ctx = {
		logger: dj.resolve<TLogger>("Logger"),
	},
): Promise<TLeftRightReturn<TUserCreatedStrategyOutput>> {
	const logger = ctx.logger.extend("user-created-strategy");

	function mapperUser(
		input: TUserCreatedStrategyInput,
	): TUserCreatedStrategyOutput {
		return {
			id: input.data.id,
			username: input.data.username,
			externalId: input.data.external_id,
			firstName: input.data.first_name,
			lastName: input.data.last_name,
			email: input.data.email_addresses[0].email_address,
			emailVerified:
				input.data.email_addresses[0].verification.status === "verified",
			emailVerificationStrategy:
				input.data.email_addresses[0].verification.strategy,
			profileImageUrl: input.data.image_url,
			createdAt: input.data.created_at,
		};
	}

	const newUser: TUserCreatedStrategyOutput = mapperUser(input);
	logger.info("New user to be created", { newUser });
	return right(newUser);
}
