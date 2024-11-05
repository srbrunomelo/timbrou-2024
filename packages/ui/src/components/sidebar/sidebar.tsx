import type { VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
import React from "react";
import { cn } from "../../lib/classes";
import { Button } from "../button/button";
import { Sheet, SheetContent, SheetTrigger } from "../sheet/sheet";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../tooltip/tooltip";
import { SidebarItemVariants } from "./sidebar.variants";

const SidebarRoot = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...rest }, ref) => {
	return (
		<div className={cn("h-fit md:h-full", className)} ref={ref} {...rest}>
			<div className="hidden w-full h-full border-r md:flex flex-col min-h-screen">
				{children}
			</div>
		</div>
	);
});

SidebarRoot.displayName = "Sidebar";

const SidebarMobileRoot = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...rest }, ref) => {
	return (
		<div ref={ref} {...rest}>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="flex flex-col">
					<div className="flex flex-col h-full gap-2 text-lg font-medium">
						{children}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
});

SidebarMobileRoot.displayName = "Sidebar";

const SidebarHeader = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...rest }, ref) => {
	return (
		<div
			className={cn(
				"w-full flex h-14 items-center px-4 lg:h-[60px] lg:px-6",
				className,
			)}
			ref={ref}
			{...rest}
		>
			{children}
		</div>
	);
});

SidebarHeader.displayName = "SidebarHeader";

const SidebarContentRoot = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...rest }, ref) => {
	return (
		<div className="flex-1" ref={ref} {...rest}>
			<nav className="grid items-start px-2 font-medium lg:px-4 py-2">
				{children}
			</nav>
		</div>
	);
});

SidebarContentRoot.displayName = "SidebarContent";

type SidebarItemProps = React.ComponentPropsWithoutRef<"div"> &
	VariantProps<typeof SidebarItemVariants>;

const SidebarItemRoot = React.forwardRef<HTMLDivElement, SidebarItemProps>(
	({ children, className, active, ...rest }, ref) => {
		return (
			<div
				className={cn(SidebarItemVariants({ active, className }))}
				ref={ref}
				{...rest}
			>
				{children}
			</div>
		);
	},
);

const SidebarItemIcon = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<"div"> & { label: string }
>(({ children, className, label, ...rest }, ref) => {
	return (
		<div className={className} ref={ref} {...rest}>
			{children}
		</div>
	);
});

SidebarItemIcon.displayName = "SidebarItemIcon";

const SidebarItemText = React.forwardRef<
	HTMLSpanElement,
	React.ComponentPropsWithoutRef<"span">
>(({ children, className, ...rest }, ref) => {
	return (
		<span className={cn("text-sm", className)} ref={ref} {...rest}>
			{children}
		</span>
	);
});

SidebarItemText.displayName = "SidebarItemText";

const SidebarItem = Object.assign(SidebarItemRoot, {
	Icon: SidebarItemIcon,
	Text: SidebarItemText,
});

const SidebarContent = Object.assign(SidebarContentRoot, {
	Item: SidebarItem,
});

const SideBar = Object.assign(SidebarRoot, {
	Header: SidebarHeader,
	Content: SidebarContent,
});

const SidebarMobile = Object.assign(SidebarMobileRoot, {
	Header: SidebarHeader,
	Content: SidebarContent,
});

export { SideBar, SidebarMobile };
