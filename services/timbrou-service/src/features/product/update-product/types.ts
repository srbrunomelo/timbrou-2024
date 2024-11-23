import type { TLogger } from "@/adapters/logger";
import type { TProductUpdate } from "@/entities/product";
import type { TLeftRightReturn } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";

export type TBootstrapInput = {
	logger: TLogger;
	query: Payload;
};

export type TExecInput = {
	id: string;
	data: TProductUpdate;
};

export type TExecOutput = TLeftRightReturn<{
	productId: string;
}>;
