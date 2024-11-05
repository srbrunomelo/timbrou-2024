import "dotenv/config";

import { describe, expect, it } from "vitest";
import { SMTPEmailSender } from "..";

describe("SMTP", () => {
	it("should send an email", async () => {
		SMTPEmailSender.bootstrap({
			host: process.env.SMTP_HOST as string,
			port: Number(process.env.SMTP_PORT as string),
			secure: process.env.SMTP_SECURE === "true",
			auth: {
				user: process.env.SMTP_USER as string,
				pass: process.env.SMTP_PASS as string,
			},
		});

		const [error, success] = await SMTPEmailSender.sendEmail({
			from: "from@example.com",
			to: "to@example.com",
			subject: "Test",
			text: "Test",
			html: "<h1>Test</h1>",
		});
		console.log(error);
		expect(Object.keys(error)).toHaveLength(0);
		expect(success).toMatchObject({
			from: "from@example.com",
			to: "to@example.com",
			subject: "Test",
			response: expect.any(String),
			messageId: expect.any(String),
		});
	});
});
