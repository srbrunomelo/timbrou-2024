"use client";

import { ErrorBoundary } from "react-error-boundary";

import { Table } from "@repo/ui/table";

export const ListProductsTableError = () => {
	return (
		<Table>
			<Table.Body>
				<Table.Row>
					<Table.Cell colSpan={6} className="h-24 text-center">
						Não foi possível carregar os dados
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	);
};

export const ListProductsTableErrorBoundary = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<ErrorBoundary fallback={<ListProductsTableError />}>{children}</ErrorBoundary>
	);
};
