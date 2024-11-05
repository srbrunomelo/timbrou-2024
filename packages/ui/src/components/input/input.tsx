import { cn } from "@/lib/classes";
import React, { type ComponentPropsWithoutRef } from "react";
import { Label } from "../label/label";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	children?: React.ReactNode;
	error?: string;
};

const InputLabel = Label;

const InputRoot = React.forwardRef<
	HTMLDivElement,
	ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
	return (
		<div className={cn("grid gap-1", className)} ref={ref} {...props}>
			{children}
		</div>
	);
});
InputRoot.displayName = "InputRoot";

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
	({ name, className, type, required, children, error, ...props }, ref) => {
		return (
			<>
				<input
					type={type}
					id={name}
					name={name}
					className={cn(
						[
							"flex",
							"h-9",
							"w-full",
							"rounded-md",
							"border",
							"border-input",
							"bg-transparent",
							"px-3",
							"py-1",
							"text-sm",
						],
						className,
					)}
					ref={ref}
					{...props}
				/>
				{error && <p className="text-feedback-alert-accent text-xs">{error}</p>}
			</>
		);
	},
);

const Input = Object.assign(InputRoot, {
	Label: InputLabel,
	Field: InputField,
});

export { Input };
