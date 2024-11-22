import { logger } from "@/adapters/logger";
import { ListUsers } from "@/features/user/list-users";
import { type Context, Hono } from "hono";

function UsersEntrypointsFactory() {
	async function listUsers(context: Context) {
		const performance = logger.performance("get /v1/users");
		performance.start();
		const [error, users] = await ListUsers({
      filters: {
        limit: 10,
        page: 1,
      }
    });
		performance.finish();
		if (!users) {
			return context.json(error, { status: error.code ?? 500 });
		}

		return context.json(users, { status: 200 });
	}

	function routes() {
		const users = new Hono();

		users.get("/", listUsers);

		return users;
	}

	return {
		routes,
	};
}

export const UsersEntrypoints = UsersEntrypointsFactory();
