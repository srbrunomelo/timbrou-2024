import { Checkbox } from "../checkbox/checkbox";

export const selectColumn = {
	id: "select",
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	header: ({ table }: any) => (
		<Checkbox
			checked={
				table.getIsAllPageRowsSelected() ||
				(table.getIsSomePageRowsSelected() && "indeterminate")
			}
			onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
			aria-label="Select all"
		/>
	),
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	cell: ({ row }: any) => (
		<Checkbox
			checked={row.getIsSelected()}
			onCheckedChange={(value) => row.toggleSelected(!!value)}
			aria-label="Select row"
		/>
	),
	enableSorting: false,
	enableHiding: false,
};
