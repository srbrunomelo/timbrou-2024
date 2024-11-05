"use server";

import type { TUser } from "@/payload-types";
import { getPayloadInstance } from "../payload/query";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type PaginatedDocs<T = any> = {
	docs: T[];
	hasNextPage: boolean;
	hasPrevPage: boolean;
	limit: number;
	nextPage?: null | number | undefined;
	page?: number;
	pagingCounter: number;
	prevPage?: null | number | undefined;
	totalDocs: number;
	totalPages: number;
};

export async function getUsers(): Promise<PaginatedDocs<TUser>> {
	const payload = await getPayloadInstance();

	const users = await payload.find({
		collection: "users",
	});

	return users;
}
