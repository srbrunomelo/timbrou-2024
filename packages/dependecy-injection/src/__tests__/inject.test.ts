import { describe, expect, it, vi } from "vitest";
import DependencyInjection from "..";

const SaveUser =
	(ctx: { logger: Console }) => (params: Record<string, string>) => {
		ctx.logger.log(params);
	};

describe("DependencyInjection", () => {
	it("should inject dependencies", async () => {
		const logger = vi.fn();
		DependencyInjection.bind("logger", { log: logger });

		const injected = DependencyInjection.inject(SaveUser, ["logger"]);
		injected({
			name: "John Doe",
			email: "john.doe@example.com",
		});

		expect(logger.mock.calls.length).toBe(1);
	});
});
