import type { TLogger } from "@/shared/adapters/logger";
import type { TLeftRightReturn } from "@repo/utils/patterns/left-right";
import type { z } from "zod";
import type { InputSchema } from "./schema";

export type TBootstrapInput = {
	logger: TLogger;
};

export type TExecInput = z.infer<typeof InputSchema>;

export type TExecOutput = TLeftRightReturn<boolean>;

export type TCreateUser = (input: TExecInput) => Promise<TExecOutput>;
