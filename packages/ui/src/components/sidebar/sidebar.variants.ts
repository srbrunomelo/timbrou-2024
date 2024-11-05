import { cn } from "@/lib/classes";
import { cva } from "class-variance-authority";

export const SidebarItemVariants = cva(
  cn([
    "flex",
    "flex-1",
    "items-center",
    "gap-3",
    "rounded-lg",
    "px-3",
    "py-2",
    // "text-muted-foreground",
    "text-smooth",
    "transition-all",
    "hover:text-pure",
  ]),
  {
    variants: {
      active: {
        true: "bg-muted text-pure",
        false: "",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);
