import { logger } from "@/adapters/logger";
import { translate } from "@/shared/locale";
import { validator as honoValidator } from "hono/validator";
import type { z } from "zod";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const validator = (schema: z.ZodObject<any> | z.ZodEffects<any>) =>
  honoValidator("json", (value, context) => {
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

      logger.error({
        path: context.req.path,
        errors,
        value,
      });
      return context.json(
        {
          message: translate({ key: "error.invalid-data" }),
          details:errors,
        },
        422,
      );
    }

    return parsed;
  });
