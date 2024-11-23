import { translate } from "@/shared/locale";
import { ChartNoAxesCombinedIcon, Layers, Package, Users2,  } from "lucide-react";

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
	{
		name: translate({ key: "layout.sidebar.orders" }),
		href: "/app/orders",
		icon: Package,
		badge: null,
	},
	{
		name: translate({ key: "layout.sidebar.my-orders" }),
		href: "/app/my-orders",
		icon: Package,
		badge: null,
	},
	{
		name: translate({ key: "layout.sidebar.products" }),
		href: "/app/products",
		icon: Layers,
		badge: null,
	},
];
