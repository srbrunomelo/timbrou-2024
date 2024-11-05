import { Card } from "@repo/ui/card";
import { Skeleton } from "@repo/ui/skeleton";

export const WealthCategoriesCardsLoading = () => {
	return (
		<>
			<Card x-chunk="wealth-category-card-1">
				<Card.Header className="pb-2">
					<Card.Description>
						<Skeleton className="h-4 w-36" />
					</Card.Description>
					<Card.Title className="text-sm">
						<Skeleton className="h-4 w-24" />
					</Card.Title>
				</Card.Header>
			</Card>
			<Card x-chunk="wealth-category-card-2">
				<Card.Header className="pb-2">
					<Card.Description>
						<Skeleton className="h-4 w-36" />
					</Card.Description>
					<Card.Title className="text-sm">
						<Skeleton className="h-4 w-24" />
					</Card.Title>
				</Card.Header>
			</Card>
			<Card x-chunk="wealth-category-card-3">
				<Card.Header className="pb-2">
					<Card.Description>
						<Skeleton className="h-4 w-36" />
					</Card.Description>
					<Card.Title className="text-sm">
						<Skeleton className="h-4 w-24" />
					</Card.Title>
				</Card.Header>
			</Card>
		</>
	);
};
