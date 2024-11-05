"use client";

import {
  type ColumnDef,
  flexRender
} from "@tanstack/react-table";
import { Columns3 } from "lucide-react";

import { cn } from "@/lib/classes";
import type React from "react";
import { Button } from "../button/button";
import {
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownTrigger,
} from "../dropdown/dropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table/table";
import { DataTableProvider } from "./data-table-context";
import { useDataTable } from "./data-table-hooks";
import { DataTablePagination } from "./data-table-pagination";

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  selectable?: boolean;
  children: React.ReactNode;
};

export function DataTableRoot<TData, TValue>({
  columns,
  data,
  selectable = false,
  children,
}: DataTableProps<TData, TValue>) {
  return (
    <DataTableProvider data={data} columns={columns} selectable={selectable}>
      <div className="flex flex-col gap-2">{children}</div>
    </DataTableProvider>
  );
}

type DataTableFiltersProps = {
  children?: React.ReactNode;
  className?: string;
};

const DataTableFilters = ({ children, className }: DataTableFiltersProps) => {
  const { table } = useDataTable();
  return (
    <div className={cn("ml-auto flex gap-2", className)}>
      {children}
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outline">
            <Columns3 className="size-3.5" />
          </Button>
        </DropdownTrigger>
        <DropdownContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownCheckboxItem>
              );
            })}
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

const DataTableContent = () => {
  const { table, columns } = useDataTable();
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-muted/85">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export const DataTable = Object.assign(DataTableRoot, {
  Filters: DataTableFilters,
  Content: DataTableContent,
  Pagination: DataTablePagination,
});
