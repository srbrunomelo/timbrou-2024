import DashboardPage from "@/ui/pages/dashboard";

type DashboardProps = {
	searchParams: {
		month: string;
	};
};

export default function Dashboard({ searchParams }: DashboardProps) {
	return <DashboardPage searchParams={searchParams} />;
}
