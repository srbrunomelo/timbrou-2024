import { InfraDependencies } from "@/infra/dependencies";
import type { Hono } from "hono";
import { cors } from "hono/cors";
import { CategoriesEntrypoints } from "./v1/categories.entrypoints";
import { HealthEntrypoints } from "./v1/health-entrypoints";
import { UsersEntrypoints } from "./v1/users.entrypoints";
import { ProductsEntrypoints } from "./v1/products.entrypoints";

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
    // Users
    app.route("/v1/users", UsersEntrypoints.routes());
    // Categories
    app.route("/v1/categories", CategoriesEntrypoints.routes());
    // Products
    app.route("/v1/products", ProductsEntrypoints.routes());

		return app;
	}

	return {
		bootstrap,
		entrypoints,
	};
}

export const Entrypoints = EntrypointsFactory();
