import configPromise from "@payload-config";
import { getPayload } from "payload";

export async function getQuery() {
	const payload = await getPayload({
		config: configPromise,
	});

	return payload;
}
