import dj from "@repo/dependency-injection";

import { getQuery } from "@/adapters/database";
import { logger } from "@/adapters/logger";

export async function InfraDependencies() {
	dj.bind("Logger", logger);
	dj.bind("Query", await getQuery());
}
