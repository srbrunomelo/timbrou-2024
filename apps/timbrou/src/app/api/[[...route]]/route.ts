import "dotenv/config";

import { Hono } from "hono";
import { handle } from "hono/vercel";

import { type TRuntimeApi, env } from "@/shared/consts/envs";
import { Entrypoints } from "@repo/timbrou-service/entrypoints";

export const runtime = env.RUNTIME_API as TRuntimeApi;

await Entrypoints.bootstrap(new Hono().basePath("/api"), true);

const entrypoints = Entrypoints.entrypoints();

export const GET = handle(entrypoints);
export const POST = handle(entrypoints);
export const PUT = handle(entrypoints);
export const PATCH = handle(entrypoints);
export const DELETE = handle(entrypoints);
export const OPTIONS = handle(entrypoints);
