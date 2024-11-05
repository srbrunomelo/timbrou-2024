import { DashboardLayout } from "@/ui/layouts/dashboard-layout";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

export default function DashboardRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
			<SignedIn>
				<DashboardLayout>{children}</DashboardLayout>
			</SignedIn>
		</>
	);
}
