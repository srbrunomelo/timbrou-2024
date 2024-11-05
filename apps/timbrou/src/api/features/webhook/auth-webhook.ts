import type { TLogger } from "@/shared/adapters/logger";
import dj from "@repo/dependency-injection";
import { left, right } from "@repo/utils/patterns/left-right";
import type { TVerifyAuthenticity } from "./verify-authenticity/types";
import { WebhookStrategyManager } from "./webhook-strategy";

type TAuthWebhookInput = {
	event: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	params: any;
	headers: {
		svix_id: string;
		svix_timestamp: string;
		svix_signature: string;
	};
};

export async function AuthWebhook(
	input: TAuthWebhookInput,
	ctx = {
		logger: dj.resolve<TLogger>("Logger"),
		verifyAuthenticity: dj.resolve<TVerifyAuthenticity>("VerifyAuthenticity"),
	},
) {
	const logger = ctx.logger.extend("auth-webhook");
	const verifyAuthenticity = ctx.verifyAuthenticity;
	logger.info("Verifying authenticity of event", { event: input.event });
	const [, success] = await verifyAuthenticity({
		body: JSON.stringify(input.params),
		headers: input.headers,
	});
	if (!success) {
		return left({
			code: 401,
			message: "Unauthorized",
		});
	}

	const [error, result] = await WebhookStrategyManager({
		event: input.event,
		params: input.params,
	});
	if (!result) {
		return left({
			code: 400,
			message: "Bad Request",
			custom: error,
		});
	}

	return right(result);
}
