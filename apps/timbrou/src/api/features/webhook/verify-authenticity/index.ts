import { Webhook } from "svix";

import type { TLogger } from "@/shared/adapters/logger";
import { env } from "@/shared/consts/envs";
import dj from "@repo/dependency-injection";
import { right } from "@repo/utils/patterns/left-right";
import type { TExecInput, TExecOutput } from "./types";

export async function VerifyAuthenticity(
  { headers, body }: TExecInput,
  ctx = {
    logger: dj.resolve<TLogger>("Logger"),
  },
): Promise<TExecOutput> {
  const logger = ctx.logger.extend("webhook-verify-authenticity");
  try {
    const sivx = new Webhook(env.WEBHOOK_SECRET);

    sivx.verify(body, {
      "svix-id": headers.svix_id,
      "svix-timestamp": headers.svix_timestamp,
      "svix-signature": headers.svix_signature,
    }) as string;
    return right(true);
  } catch (err) {
    logger.error(err);
    return right(false);
  }
}
