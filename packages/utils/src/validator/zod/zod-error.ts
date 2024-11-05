import type { ZodError } from "zod";

export function ZodFormatError<T>(error: ZodError<T>) {
	const zodFormatted: Record<
		string,
		Record<string, Array<string>>
	> = error.format() as unknown as Record<
		string,
		Record<string, Array<string>>
	>;
	const formattedErrors = Object.keys(zodFormatted).reduce(
		(acc: Record<string, string>, current: string) => {
			if (current === "_errors") return acc;
			acc[current] = zodFormatted[current]._errors.join(", ");
			return acc;
		},
		{},
	);

	return formattedErrors;
}
