import type { TLogger } from "@/adapters/logger";
import type { TCategory } from "@/entities/category";
import type { TPaginatedResult } from "@/shared/types/paginated";
import type { TLeftRightReturn } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";
import type { z } from "zod";
import type { InputSchema } from "./schema";

export type TBootstrapInput = {
  logger: TLogger;
  query: Payload;
};

export type TExecInput = z.infer<typeof InputSchema>;

export type TExecOutput = TLeftRightReturn<
	TPaginatedResult & {
		categories: Array<TCategory>;
	}
>;
