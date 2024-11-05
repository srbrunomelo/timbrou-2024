"use server";

import type { TUser } from "@/payload-types";
import { getPayloadInstance } from "../payload/query";

export async function getUserByExternalId(
	externalId: string,
): Promise<TUser | null> {
	const payload = await getPayloadInstance();

	const user = await payload.find({
		collection: "users",
		where: { external_id: { equals: externalId } },
	});

	if (!user.docs.length) {
		return null;
	}

	return user.docs[0];
}
