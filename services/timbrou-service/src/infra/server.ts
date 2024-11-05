import "dotenv/config";

import { logger } from "@/adapters/logger";
import { Entrypoints } from "@/interface/rest/entrypoints";
import { serve } from "@hono/node-server";
import { Hono } from "hono";

export async function Server() {
	await Entrypoints.bootstrap(new Hono().basePath("/api"), true);
	const entrypoints = Entrypoints.entrypoints();

	serve({
		fetch: entrypoints.fetch,
		port: 4000,
	});
	logger.info("Server started on port 4000");
}

Server();
