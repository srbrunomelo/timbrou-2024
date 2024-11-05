import "@/api/infra/resolve-dependencies";

import { CreateUser } from "@/api/features/user/create-user";
import { AuthWebhook } from "@/api/features/webhook/auth-webhook";

export async function POST(request: Request) {
  const body = await request.json();
  const headers = Object.fromEntries(request.headers.entries());

  const [error, result] = await AuthWebhook({
    event: body.type,
    params: body,
    headers: {
      svix_id: headers["svix-id"],
      svix_timestamp: headers["svix-timestamp"],
      svix_signature: headers["svix-signature"],
    },
  });

  if (!result) {
    return Response.json(error, { status: error.code || 400 });
  }

  const [createUserError, createUserResult] = await CreateUser(result);

  if (!createUserResult) {
    return Response.json(createUserError, { status: createUserError.code || 400 });
  }

  return Response.json({ result });
}
