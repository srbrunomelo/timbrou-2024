import { ptBr } from "@/shared/locale/ptBr";

type TKey = keyof typeof ptBr;
type TranslateParams = {
  key: TKey;
  locale?: Record<string, unknown>;
  custom?: Record<string, string>;
};

export function translate({
  key,
  locale = ptBr,
  custom = {},
}: TranslateParams): string {
  try {
    let message = locale[key];
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
  } catch {
    return key;
  }
}
