import { logger } from "@/adapters/logger";
import { ptBr } from "@/shared/locale/ptBr";

type TranslateParams = {
	key: string;
	locale?: Record<string, unknown>;
	custom?: Record<string, string>;
};

export function translate({
	key,
	locale = ptBr,
	custom = {},
}: TranslateParams): string {
	try {
		let message = String(
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			key.split(".").reduce((acc, current) => (acc as any)[current], locale),
		);
		const customKeys = Object.keys(custom);
		if (customKeys.length > 0) {
			for (const customKey of customKeys) {
				message = (message as string).replace(
					`{${customKey}}`,
					custom[customKey],
				);
			}
		}
		return (message as string) || key;
	} catch (error) {
		logger.error(error);
		return key;
	}
}
