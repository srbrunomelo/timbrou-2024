import type { TLeftRightReturn } from "./left-right-return";

export type TFeatureBuilder<T> = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	bootstrap: (...args: any[]) => void;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	exec: (params: any) => Promise<TLeftRightReturn<T>> | TLeftRightReturn<T>;
};
