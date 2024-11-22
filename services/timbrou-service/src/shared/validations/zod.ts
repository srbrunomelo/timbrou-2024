import type { TError } from "@repo/utils/patterns/left-right";
import type { z } from "zod";

export function safeValidation(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	schema: z.ZodObject<any> | z.ZodEffects<any>,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	value: any,
) {
	const parsed = schema.safeParse(value);
	if (!parsed.success) {
		const errors = parsed.error.issues.reduce(
			(acc: Record<string, string>, current) => {
				const key = current.path[0] as string;
				acc[key] = current.message;
				return acc;
			},
			{},
		);
		return {
			success: false,
			errors: {
				code: 422,
				key: "invalid-validation",
				message: "Invalid data",
				custom: errors,
			} as TError,
		};
	}
	return {
		success: true,
	};
}
