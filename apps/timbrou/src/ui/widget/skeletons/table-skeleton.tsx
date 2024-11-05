import { Skeleton } from "@repo/ui/skeleton";
import { Table } from "@repo/ui/table";

type TTableSkeletonProps = {
  columns: number;
  rows: number;
};

export function TableSkeleton({ columns, rows }: TTableSkeletonProps) {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {Array.from({ length: columns }).map((_, index) => (
            <Table.Head
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={`head-${index}`}
            >
              <Skeleton className="h-4 w-full" />
            </Table.Head>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Array.from({ length: rows }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Table.Row key={`row-${index}`}>
            {Array.from({ length: columns }).map((_, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <Table.Cell key={`cell-${index}`}>
                <Skeleton className="h-4 w-full" />
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
