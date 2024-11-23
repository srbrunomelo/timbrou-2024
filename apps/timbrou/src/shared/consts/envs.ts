export type TRuntimeApi = "nodejs" | "experimental-edge" | "edge" | undefined;

export const env = {
	NODE_ENV: process.env.NODE_ENV as string,
	CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY as string,
	WEBHOOK_SECRET: process.env.WEBHOOK_SECRET as string,
	BACKEND_URL: process.env.BACKEND_URL as string,

	RUNTIME_API: process.env.RUNTIME_API as TRuntimeApi,
};
