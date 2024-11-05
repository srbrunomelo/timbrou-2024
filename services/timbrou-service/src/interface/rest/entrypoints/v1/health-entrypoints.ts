import { logger } from "@/adapters/logger";
import { ApplicationStatus } from "@/features/health/application-status";
import { type Context, Hono } from "hono";

function HealthEntrypointsFactory() {
	async function getApplicationStatus(context: Context) {
		const performance = logger.performance("get /v1/status");
		performance.start();
		const [error, applicationStatus] = await ApplicationStatus();
		performance.finish();
		if (!applicationStatus) {
			return context.json(error, { status: error.code ?? 500 });
		}

		return context.json(applicationStatus, { status: 200 });
	}

	function routes() {
		const health = new Hono();

		health.get("/v1/status", getApplicationStatus);

		return health;
	}

	return {
		routes,
	};
}

export const HealthEntrypoints = HealthEntrypointsFactory();
