import { currentUser } from "@clerk/nextjs/server";
import { getPayloadInstance } from "../payload/query";
import { getUserByExternalId } from "../user/get-user-by-external-id";

export async function getWealthByMonth(_month: string) {
  const user = await currentUser();
  const [payload, dbUser] = await Promise.all([
    getPayloadInstance(),
    getUserByExternalId(user?.id ?? ""),
  ]);

  if (!dbUser) {
    return [];
  }

  const wealth = await payload.find({
    collection: "wealth",
    where: {
      owner: {
        equals: dbUser.id,
      },
    },
    depth: 0,
    limit: 2,
    sort: "-createdAt",
  });
  return wealth.docs;
}
