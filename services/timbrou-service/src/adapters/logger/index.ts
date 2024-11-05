import { LoggerFactory } from "@repo/logger";

const Logger = LoggerFactory();
Logger.bootstrap("pay-class-service");

export type TFeatureLogger = ReturnType<typeof Logger.extend>;
export type TLogger = typeof Logger;

export const logger = Logger;
