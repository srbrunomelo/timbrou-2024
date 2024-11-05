"use client";

import { AppLogo, AppName } from "@/shared/consts/app";
import { translate } from "@/shared/locale";
import { Badge } from "@repo/ui/badge";
import { Button } from "@repo/ui/button";
import { SidebarMobile } from "@repo/ui/sidebar";
import { Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItems } from "./consts";

export const SideBarMobile = () => {
	const path = usePathname();

	const renderItems = () => {
		return SidebarItems.map((item) => (
			<Link href={item.href} key={item.name}>
				<SidebarMobile.Content.Item active={path === item.href}>
					<item.icon className="size-5" />
					<span className="text-sm">{item.name}</span>
					{item.badge && (
						<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
							{item.badge}
						</Badge>
					)}
				</SidebarMobile.Content.Item>
			</Link>
		));
	};

	return (
		<SidebarMobile>
			<SidebarMobile.Header>
				<Link href="/" className="flex items-center gap-2 font-semibold">
					<AppLogo className="h-6 w-6" />
					<span className="">{AppName}</span>
				</Link>
				<Button variant="outline" size="icon" className="ml-auto h-8 w-8">
					<Bell className="size-5" />
					<span className="sr-only">Toggle notifications</span>
				</Button>
			</SidebarMobile.Header>
			<SidebarMobile.Content>{renderItems()}</SidebarMobile.Content>
			<div className="mt-auto p-4 mx-auto">
				<span className="text-meld text-xs">Desenvolvido por B D DONNICI</span>
			</div>
		</SidebarMobile>
	);
};
