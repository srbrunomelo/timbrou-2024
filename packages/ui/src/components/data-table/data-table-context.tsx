import {
	type ColumnDef,
	type Table as TableType,
	type VisibilityState,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { type PropsWithChildren, createContext, useState } from "react";
import { DataTableColumnHeader } from "./data-table-column";
import { selectColumn } from "./data-table-select-column";

type DataTableContextType<
	TData = unknown,
	TValue = unknown,
> = PropsWithChildren<{
	table: TableType<TData>;
	data: TData[];
	columns: ColumnDef<TData, TValue>[];
	selectable?: boolean;
}>;

export const DataTableContext = createContext<DataTableContextType>(
	{} as DataTableContextType,
);

type DataTableProviderProps<TData, TValue> = PropsWithChildren<{
	data: TData[];
	columns: ColumnDef<TData, TValue>[];
	selectable?: boolean;
}>;

export const DataTableProvider = <TData, TValue>({
	children,
	data,
	columns,
	selectable,
}: DataTableProviderProps<TData, TValue>) => {
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = useState({});

	const formattedColumns = columns.map((column) => ({
		...column,
		header: ({ column: headerColumn }) => (
			<DataTableColumnHeader
				column={headerColumn}
				title={column.header as string}
			/>
		),
	})) as ColumnDef<TData, TValue>[];

	if (selectable) {
		formattedColumns.unshift(selectColumn);
	}

	const table = useReactTable({
		data,
		columns: formattedColumns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<DataTableContext.Provider
			value={{
				table: table as TableType<unknown>,
				columns: formattedColumns as ColumnDef<unknown, unknown>[],
				data: data as unknown[],
				selectable,
			}}
		>
			{children}
		</DataTableContext.Provider>
	);
};
