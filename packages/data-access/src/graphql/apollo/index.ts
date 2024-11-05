import {
	ApolloClient,
	type ApolloLink,
	type DefaultOptions,
	InMemoryCache,
	type NormalizedCacheObject,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import type { TGraphql } from "../types";

function GraphqlSingleton(): TGraphql {
	let clientAuth: ApolloClient<NormalizedCacheObject>;
	let client: ApolloClient<NormalizedCacheObject>;
	let headers: undefined | (() => Record<string, string>);
	let httpLink: ApolloLink;

	const defaultOptions: DefaultOptions = {
		watchQuery: {
			fetchPolicy: "no-cache",
			errorPolicy: "ignore",
		},
		query: {
			fetchPolicy: "no-cache",
			errorPolicy: "all",
		},
	};

	function bootstrap(uri: string, getHeaders?: () => Record<string, string>) {
		headers = getHeaders;
		httpLink = createHttpLink({
			uri,
		});

		client = new ApolloClient({
			link: httpLink,
			cache: new InMemoryCache(),
			defaultOptions,
		});
	}

	async function bootstrapAuth() {
		if (clientAuth) return;
		const customHeaders = headers?.() ?? {};
		const authLink = setContext((_, { headers }) => {
			return {
				headers: {
					...headers,
					...customHeaders,
				},
			};
		});
		clientAuth = new ApolloClient({
			link: authLink.concat(httpLink),
			cache: new InMemoryCache(),
			defaultOptions,
		});
	}

	return {
		get client() {
			return client;
		},
		bootstrapAuth,
		get clientAuth() {
			if (!clientAuth) {
				bootstrapAuth();
				if (!clientAuth) throw new Error("Auth client not initialized");
			}
			return clientAuth;
		},
	};
}

export const Graphql = GraphqlSingleton();
