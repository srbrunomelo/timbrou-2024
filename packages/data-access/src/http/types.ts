export type THTTPRequestOptions = {
	params?: Record<string, unknown>;
	headers?: HeadersInit;
	signal?: AbortSignal;
	withCredentials?: boolean;
	cache?: RequestCache;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	next?: any;
	mode?: RequestMode;
};

export type THTTPResponse<T> = {
	data: T;
	status: number;
};

export type THTTPRequest = {
	get<T>(url: string, options?: THTTPRequestOptions): Promise<THTTPResponse<T>>;
	post<T>(
		url: string,
		body: Record<string, unknown>,
		options?: THTTPRequestOptions,
	): Promise<THTTPResponse<T>>;
	put<T>(
		url: string,
		body: Record<string, unknown>,
		options?: THTTPRequestOptions,
	): Promise<THTTPResponse<T>>;
	patch<T>(
		url: string,
		body: Record<string, unknown>,
		options?: THTTPRequestOptions,
	): Promise<THTTPResponse<T>>;
	delete<T>(
		url: string,
		options?: THTTPRequestOptions,
	): Promise<THTTPResponse<T>>;
};
