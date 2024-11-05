import { InfraDependencies } from "@/infra/dependencies";
import type { Hono } from "hono";
import { cors } from "hono/cors";
import { HealthEntrypoints } from "./v1/health-entrypoints";

function EntrypointsFactory() {
	let app: Hono;
	async function bootstrap(
		honoInstance: Hono,
		shouldResolveDependencies = false,
	) {
		app = honoInstance;
		if (shouldResolveDependencies) {
			await InfraDependencies();
		}
	}

	function entrypoints() {
		app.use("/*", cors());
		// Error handling
		app.notFound((ctx) => {
			return ctx.json({ message: "Resource not found" }, 404);
		});
		app.onError((err, ctx) => {
			console.error(err);
			return ctx.json({ message: "Internal server error" }, 500);
		});

		// Health
		app.route("/", HealthEntrypoints.routes());

		return app;
	}

	return {
		bootstrap,
		entrypoints,
	};
}

export const Entrypoints = EntrypointsFactory();
