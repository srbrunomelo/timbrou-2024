"use client";

import { PaginatedDocs } from "@/data-access/product/get-products";
import type { TProduct } from "@/payload-types";
import { Button } from "@repo/ui/button";
import { DataTable, TCellProps } from "@repo/ui/data-table";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownTrigger,
} from "@repo/ui/dropdown";
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/avatar";
import { Currency } from "@repo/utils/currency";
import { getInitials } from "@repo/utils/formatters/string/getInitials";
import { MoreHorizontal } from "lucide-react";

type ListProductsTableClientProps = {
  products: PaginatedDocs<TProduct>;
};

const columns = [
  {
    header: "Imagem",
    accessorKey: "images",
    cell: (row: any) => {
      const image = row.getValue().find((image: any) => image.default);
      return (
        <Avatar>
          <AvatarImage src={image.url} alt={image.alt} />
          <AvatarFallback>{getInitials(image.alt)}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    header: "Nome",
    accessorKey: "name",
  },
  {
    header: "Descrição",
    accessorKey: "description",
  },
  {
    header: "Categoria",
    accessorKey: "category.name",
  },
  {
    header: "Preço",
    accessorKey: "price",
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    cell: (row: any) => {
      return new Currency(row.getValue()).format();
    },
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

export function ListProductsTableClient({
  products,
}: ListProductsTableClientProps) {
  return (
    <DataTable columns={columns} data={products.products}>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  );
}
