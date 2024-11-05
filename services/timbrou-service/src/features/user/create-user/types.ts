import type { TLogger } from "@/adapters/logger";
import type { TLeftRightReturn } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";
import type { z } from "zod";
import type { InputSchema } from "./schema";

export type TBootstrapInput = {
	logger: TLogger;
	query: Payload;
};

export type TExecInput = z.infer<typeof InputSchema>;

export type TExecOutput = TLeftRightReturn<boolean>;

export type TCreateUser = (input: TExecInput) => Promise<TExecOutput>;
