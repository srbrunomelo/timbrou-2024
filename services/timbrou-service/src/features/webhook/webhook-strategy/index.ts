import type { TLogger } from "@/adapters/logger";
import dj from "@repo/dependency-injection";
import { left } from "@repo/utils/patterns/left-right";
import { UserCreatedStrategy } from "./strategies/user-created";
import type { TUserCreatedStrategy } from "./strategies/user-created/types";

type TInput = {
	event: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	params: any;
};

type TStrategy = TUserCreatedStrategy;

export async function WebhookStrategyManager(
	input: TInput,
	ctx = {
		logger: dj.resolve<TLogger>("Logger"),
	},
) {
	const logger = ctx.logger.extend("webhook-strategy-manager");
	const strategies = new Map<string, TStrategy>([
		["user.created", UserCreatedStrategy],
		["user.createdAtEdge", UserCreatedStrategy],
	]);

	const strategy = strategies.get(input.event);
	if (!strategy) {
		logger.error(`Strategy ${input.event} not found`);
		return left({
			code: 404,
			message: `Strategy ${input.event} not found`,
			key: "strategy-not-found",
		});
	}
	return await strategy(input.params);
}
