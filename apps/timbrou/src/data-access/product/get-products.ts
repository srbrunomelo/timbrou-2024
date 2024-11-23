"use server";

import type { TProduct } from "@/payload-types";
import { getPayloadInstance } from "../payload/query";
import { env } from "@/shared/consts/envs";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type PaginatedDocs<T = any> = {
  products: T[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};

export async function getProducts(): Promise<PaginatedDocs<TProduct>> {
  const response = await fetch(`${env.BACKEND_URL}/api/v1/products`);

  return response.json();
}
