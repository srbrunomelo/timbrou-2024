import type { TLogger } from "@/shared/adapters/logger";
import configPromise from "@payload-config";
import dj from "@repo/dependency-injection";
import { left, right } from "@repo/utils/patterns/left-right";
import { getPayload } from "payload";
import type { TExecInput, TExecOutput } from "./types";

export async function CreateUser(
  input: TExecInput,
  ctx = {
    logger: dj.resolve<TLogger>("Logger"),
  },
): Promise<TExecOutput> {
  const logger = ctx.logger.extend("create-user");
  const payload = await getPayload({
    config: configPromise,
  });

  try {
    logger.info("Creating user", { input });
    await payload.create({
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
