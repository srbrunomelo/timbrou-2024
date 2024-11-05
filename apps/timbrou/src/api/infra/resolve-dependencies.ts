import { logger } from "@/shared/adapters/logger";
import dj from "@repo/dependency-injection";
import { CreateUser } from "../features/user/create-user";
import type { TCreateUser } from "../features/user/create-user/types";
import { VerifyAuthenticity } from "../features/webhook/verify-authenticity";
import type { TVerifyAuthenticity } from "../features/webhook/verify-authenticity/types";

dj.bind("Logger", logger);
dj.bind<TVerifyAuthenticity>("VerifyAuthenticity", VerifyAuthenticity);
dj.bind<TCreateUser>("CreateUser", CreateUser);
