import { Suspense } from "react";
import { TableSkeleton } from "../skeletons/table-skeleton";
import { ListUsersTableErrorBoundary } from "./list-users-table-error";
import { ListUsersTableServer } from "./list-users-table-server";

export async function ListUsersTable() {
  return (
    <ListUsersTableErrorBoundary>
      <Suspense fallback={<TableSkeleton columns={6} rows={3} />}>
        <ListUsersTableServer />
      </Suspense>
    </ListUsersTableErrorBoundary>
  );
}
