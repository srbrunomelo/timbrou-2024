import { z } from "zod";

export const InputSchema = z.object({
  id: z.string(),
  externalId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string().nullable(),
  email: z.string().email(),
  emailVerified: z.boolean(),
  emailVerificationStrategy: z.string(),
  profileImageUrl: z.string(),
  createdAt: z.number(),
})
