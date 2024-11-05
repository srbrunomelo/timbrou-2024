export type TError = {
	code?: number;
	message?: string;
	key?: string;
	custom?: Record<string, unknown>;
};
export type TMessage = {
	message: string;
	key: string;
	custom?: Record<string, unknown>;
};

export type TSuccess<T> = T | null;

export type TLeftRightReturn<T> = [TError, TSuccess<T>];

export function left(
	error: Partial<Omit<TError, "hasError">>,
): TLeftRightReturn<null> {
	return [
		{
			code: error.code ?? 500,
			message: error.message ?? "Internal server error",
			key: error.key ?? "internal-server-error",
			custom: error.custom,
		},
		null,
	];
}

export function right<T>(success: T): TLeftRightReturn<T> {
	return [{}, success];
}
