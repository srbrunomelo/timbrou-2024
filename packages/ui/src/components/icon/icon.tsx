import React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { AllIcons, type IconName } from "./all-icons";

import { cn } from "@/lib/classes";

const iconVariants = cva(["size-8", "fill-icon-subtle"]);

export type IconProps = VariantProps<typeof iconVariants> & {
	className?: string;
	name: IconName;
};

export const Icon = React.forwardRef<React.ElementRef<"svg">, IconProps>(
	({ name, className, ...rest }, ref) => {
		const SvgIcon = AllIcons[name];
		if (!SvgIcon) return null;
		return (
			<SvgIcon className={cn(iconVariants(), className)} ref={ref} {...rest} />
		);
	},
);

Icon.displayName = "Icon";
