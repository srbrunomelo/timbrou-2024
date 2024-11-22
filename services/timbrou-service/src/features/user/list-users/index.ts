import type { TLogger } from "@/adapters/logger";
import dj from "@repo/dependency-injection";
import { left, right } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";
import type { TExecInput, TExecOutput } from "./types";

export async function ListUsers(
  input: TExecInput,
  ctx = {
    logger: dj.resolve<TLogger>("Logger"),
    query: dj.resolve<Payload>("Query"),
  },
): Promise<TExecOutput> {
  const logger = ctx.logger.extend("list-users");
  const query = ctx.query;

  try {
    const users = await query.find({
      collection: "users",
      limit: input.filters.limit,
      page: input.filters.page,
    });
    return right({
      users: users.docs,
      total: users.totalDocs,
      limit: users.limit,
      page: users.page,
      pages: users.totalPages,
    });
  } catch (error) {
    logger.error("Error creating user", { error });
    return left({
      code: 400,
      message: String(error),
    });
  }
}
