import type { TLogger } from "@/shared/adapters/logger";
import type { TLeftRightReturn } from "@repo/utils/patterns/left-right";

export type TBootstrapInput = {
  logger: TLogger;
};

export type TExecInput = {
  headers: {
    svix_id: string;
    svix_timestamp: string;
    svix_signature: string;
  };
  body: string | Buffer;
};

export type TExecOutput = TLeftRightReturn<boolean>;

export type TVerifyAuthenticity = (input: TExecInput) => Promise<TExecOutput>;
