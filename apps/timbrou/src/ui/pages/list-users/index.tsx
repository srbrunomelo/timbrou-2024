
import { PlusCircle } from "lucide-react";

import { ListUsersTable } from "@/ui/widget/list-users-table";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import Link from "next/link";

export function ListUsersPage() {
  return (
    <main className="w-full p-4 lg:p-6">
      <Card>
        <Card.Header>
          <Card.Title>
            <div className="flex items-center justify-between">
              Usuários
              <Button size="sm" className="gap-1" asChild>
                <Link href="/app/users/new">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Novo Usuário
                  </span>
                </Link>
              </Button>
            </div>
          </Card.Title>
          <Card.Description>Gerencie seus usuários.</Card.Description>
        </Card.Header>
        <Card.Content>
          <ListUsersTable />
        </Card.Content>
      </Card>
    </main>
  );
}
