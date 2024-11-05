import { describe, expect, it } from "vitest";
import { Logger } from "..";

describe("Logger", () => {
	it("should be able to create a logger", () => {
		Logger.bootstrap("test");
		const { start, finish } = Logger.performance("spec");
		start();
		Logger.debug("testando a parada");
		Logger.info("testando a parada");
		Logger.warn("testando a parada");
		Logger.error("testando a parada");
		finish();
		expect(Logger.debug).toBeDefined();
		expect(Logger.info).toBeDefined();
		expect(Logger.warn).toBeDefined();
		expect(Logger.error).toBeDefined();
		expect(Logger.performance).toBeDefined();
		expect(Logger.performance("spec")).toMatchObject({
			start: expect.any(Function),
			finish: expect.any(Function),
		});
	});
});
