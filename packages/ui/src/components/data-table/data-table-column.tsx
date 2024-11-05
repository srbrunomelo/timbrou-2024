import { Column } from "@tanstack/react-table";

import { Button } from "../button/button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownTrigger,
} from "../dropdown/dropdown";
import { cn } from "@/lib/classes";
import { SortAsc, SortDesc, ChevronsUpDown, EyeOff } from "lucide-react";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Dropdown>
        <DropdownTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <SortDesc className="ml-2 size-4" />
            ) : column.getIsSorted() === "asc" ? (
              <SortAsc className="ml-2 size-4" />
            ) : (
              <ChevronsUpDown className="ml-2 size-3" />
            )}
          </Button>
        </DropdownTrigger>
        <DropdownContent align="start">
          <DropdownItem onClick={() => column.toggleSorting(false)}>
            <SortAsc className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownItem>
          <DropdownItem onClick={() => column.toggleSorting(true)}>
            <SortDesc className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownItem>
          <DropdownSeparator />
          <DropdownItem onClick={() => column.toggleVisibility(false)}>
            <EyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
}
