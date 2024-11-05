import { translate } from "@/shared/locale";
import {
  ChartNoAxesCombinedIcon,
  Pyramid,
  Users2
} from "lucide-react";

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
  // {
  //   name: translate({ key: "layout.sidebar.wealth" }),
  //   href: "/app/wealth",
  //   icon: WalletMinimal,
  //   badge: null,
  // },
];
