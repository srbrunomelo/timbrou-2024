"use client";

import type { TProduct } from "@/payload-types";
import { Button } from "@repo/ui/button";
import { DataTable } from "@repo/ui/data-table";
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownLabel,
	DropdownTrigger,
} from "@repo/ui/dropdown";
import { MoreHorizontal } from "lucide-react";
import type { PaginatedDocs } from "payload";

type ListProductsTableClientProps = {
	products: PaginatedDocs<TProduct>;
};

const columns = [
	{
		header: "Nome",
		accessorKey: "name",
	},
	{
		header: "Email",
		accessorKey: "email",
	},
	{
		header: "Telefone",
		accessorKey: "phone",
	},
	{
		header: "Status",
		accessorKey: "status",
	},
	{
		header: "Plano",
		accessorKey: "plan",
	},
	{
		id: "actions",
		cell: () => (
			<Dropdown>
				<DropdownTrigger asChild>
					<Button aria-haspopup="true" size="icon" variant="ghost">
						<MoreHorizontal className="h-4 w-4" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</DropdownTrigger>
				<DropdownContent align="end">
					<DropdownLabel>Actions</DropdownLabel>
					<DropdownItem>Edit</DropdownItem>
					<DropdownItem className="text-destructive">Delete</DropdownItem>
				</DropdownContent>
			</Dropdown>
		),
	},
];

export function ListProductsTableClient({ products }: ListProductsTableClientProps) {
	return (
		<DataTable columns={columns} data={products.docs}>
			<DataTable.Content />
			<DataTable.Pagination />
		</DataTable>
	);
}
