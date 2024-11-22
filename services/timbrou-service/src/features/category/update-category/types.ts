import type { TLogger } from "@/adapters/logger";
import type { TCategoryUpdate } from "@/entities/category";
import type { TLeftRightReturn } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";

export type TBootstrapInput = {
	logger: TLogger;
	query: Payload;
};

export type TExecInput = {
	id: string;
	data: TCategoryUpdate;
};

export type TExecOutput = TLeftRightReturn<{
	categoryId: string;
}>;
