import { PlusCircle } from "lucide-react";

import { ListProductsTable } from "@/ui/widget/list-products-table";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import Link from "next/link";

export function ListProductsPage() {
	return (
		<main className="w-full p-4 lg:p-6">
			<Card>
				<Card.Header>
					<Card.Title>
						<div className="flex items-center justify-between">
							Produtos
							<Button size="sm" className="gap-1" asChild>
								<Link href="/app/products/new">
									<PlusCircle className="h-3.5 w-3.5" />
									<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
										Novo Produto
									</span>
								</Link>
							</Button>
						</div>
					</Card.Title>
					<Card.Description>Gerencie seus produtos.</Card.Description>
				</Card.Header>
				<Card.Content>
					<ListProductsTable />
				</Card.Content>
			</Card>
		</main>
	);
}
