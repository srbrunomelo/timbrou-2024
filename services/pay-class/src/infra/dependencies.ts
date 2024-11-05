import dj from "@repo/dependency-injection";

import { logger } from "@/adapters/logger";

export function InfraDependencies() {
	dj.bind("Logger", logger);
}
