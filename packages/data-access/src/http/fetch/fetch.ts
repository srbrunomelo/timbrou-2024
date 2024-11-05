import qs from "qs";

import type {
	THTTPRequest,
	THTTPRequestOptions,
	THTTPResponse,
} from "../types";

const defaultHeaders = {
	"Content-Type": "application/json",
};

function FetchHTTPRequestSingleton(): THTTPRequest {
	function formatUrl(url: string, params?: Record<string, unknown>) {
		if (!params) return url;
		const queryString = qs.stringify(params);
		return `${url}?${queryString}`;
	}

	async function requestWithBody(
		method: "POST" | "PUT" | "PATCH",
		url: string,
		body: Record<string, unknown>,
		options: THTTPRequestOptions,
	) {
		const formattedUrl = formatUrl(url, options?.params);
		const startTime = performance.now();
		const response = await fetch(formattedUrl, {
			method,
			body: JSON.stringify(body),
			...options,
			headers: {
				...defaultHeaders,
				...(options?.headers ?? {}),
			},
			credentials: options?.withCredentials ? "include" : undefined,
		});
		const data = await response.json();
		const endTime = performance.now();
		console.log(
			`Time taken for ${method} ${formattedUrl} is ${endTime - startTime} ms`,
		);

		return {
			data,
			status: response.status,
		};
	}

	async function get<T>(
		url: string,
		options: THTTPRequestOptions,
	): Promise<THTTPResponse<T>> {
		const formattedUrl = formatUrl(url, options?.params);
		const startTime = performance.now();
		const response = await fetch(formattedUrl, {
			...options,
		});
		const data = await response.json();
		const endTime = performance.now();
		console.log(
			`Time taken for get ${formattedUrl} is ${endTime - startTime} ms`,
		);
		return {
			data,
			status: response.status,
		};
	}

	async function post<T>(
		url: string,
		body: Record<string, unknown>,
		options: THTTPRequestOptions,
	): Promise<THTTPResponse<T>> {
		return await requestWithBody("POST", url, body, options);
	}

	async function put<T>(
		url: string,
		body: Record<string, unknown>,
		options: THTTPRequestOptions,
	): Promise<THTTPResponse<T>> {
		return await requestWithBody("PUT", url, body, options);
	}
	async function patch<T>(
		url: string,
		body: Record<string, unknown>,
		options: THTTPRequestOptions,
	): Promise<THTTPResponse<T>> {
		return await requestWithBody("PATCH", url, body, options);
	}

	async function remove<T>(
		url: string,
		options: THTTPRequestOptions,
	): Promise<THTTPResponse<T>> {
		const formattedUrl = formatUrl(url, options?.params);

		const startTime = performance.now();
		const response = await fetch(formattedUrl, {
			method: "DELETE",
			headers: options?.headers,
		});
		const data = await response.json();
		const endTime = performance.now();
		console.log(
			`Time taken for get ${formattedUrl} is ${endTime - startTime} ms`,
		);
		return {
			data,
			status: response.status,
		};
	}

	return {
		get,
		post,
		put,
		patch,
		delete: remove,
	};
}

export const FetchHTTPRequest = FetchHTTPRequestSingleton();
