import type { PropsWithChildren } from "react";
import { Children } from "react";

type TEach<T> = {
	items: Array<T>;
	render: (item: T, index: number, list: Array<T>) => React.ReactNode;
};

export function Each<T>({ items, render }: TEach<T>) {
	if (!items || !Array.isArray(items) || items.length === 0) return null;
	return Children.toArray(items.map(render));
}

type IfProps = PropsWithChildren<{
	condition?: boolean;
}>;

export function If({ condition, children }: IfProps) {
	if (condition) {
		return children;
	}
	return null;
}

export { NoSsr } from "./no-ssr";
