import { Suspense } from "react";
import { TableSkeleton } from "../skeletons/table-skeleton";
import { ListProductsTableErrorBoundary } from "./list-products-table-error";
import { ListProductsTableServer } from "./list-products-table-server";

export async function ListProductsTable() {
	return (
		<ListProductsTableErrorBoundary>
			<Suspense fallback={<TableSkeleton columns={6} rows={3} />}>
				<ListProductsTableServer />
			</Suspense>
		</ListProductsTableErrorBoundary>
	);
}
