import type { TLogger } from "@/adapters/logger";
import { TProductCreate } from "@/entities/product/types";
import type { TLeftRightReturn } from "@repo/utils/patterns/left-right";
import type { Payload } from "payload";

export type TBootstrapInput = {
  logger: TLogger;
  query: Payload;
};

export type TExecInput = TProductCreate;

export type TExecOutput = TLeftRightReturn<{
  productId: string;
}>;
