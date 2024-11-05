import { translate } from "@/shared/locale";
import { ChartNoAxesCombinedIcon, Users2 } from "lucide-react";

export const SidebarItems = [
	{
		name: translate({ key: "layout.sidebar.dashboard" }),
		href: "/app/dashboard",
		icon: ChartNoAxesCombinedIcon,
		badge: null,
	},
	{
		name: translate({ key: "layout.sidebar.users" }),
		href: "/app/users",
		icon: Users2,
		badge: null,
	},
];
