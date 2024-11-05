import { getUsers } from "@/data-access/user/get-users";
import { ListUsersTableClient } from "./list-users-table-client";

export async function ListUsersTableServer() {
  const users = await getUsers();

  return <ListUsersTableClient users={users} />;
}
