import type { TLeftRightReturn } from "@repo/utils/patterns/left-right";
import type { z } from "zod";
import type { InputSchema, OutputSchema } from "./schemas";

export type TUserCreatedStrategyInput = z.infer<typeof InputSchema>;
export type TUserCreatedStrategyOutput = z.infer<typeof OutputSchema>;

export type TUserCreatedStrategy = (
	input: TUserCreatedStrategyInput,
) => Promise<TLeftRightReturn<TUserCreatedStrategyOutput>>;
