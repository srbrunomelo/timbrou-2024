import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@repo/ui/lib/classes";
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";

import { ptBR } from "@clerk/localizations";

import "@repo/ui/themes/default.css";
import "@/ui/styles/globals.css";

export const metadata: Metadata = {
	title: {
		template: "%s - Finance Share",
		default: "Finance Share - Compartilhe suas finanças com quem você quiser",
	},
	description:
		"O Finance Share é um software de compartilhamento de finanças que ajuda você a gerenciar suas finanças de forma fácil e eficiente.",
};

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-primary",
});

const lexend = Lexend({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-secondary",
});

type RootLayoutProps = {
	children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
	return (
		<ClerkProvider signInForceRedirectUrl="/app/dashboard" localization={ptBR}>
			<html
				lang="pt-BR"
				className={cn([
					"h-full",
					"scroll-smooth",
					"antialiased",
					inter.variable,
					lexend.variable,
				])}
				suppressHydrationWarning
			>
				<body>{children}</body>
			</html>
		</ClerkProvider>
	);
}

export default RootLayout;
