import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export interface TGraphql {
	readonly client: ApolloClient<NormalizedCacheObject>;
	bootstrapAuth: () => Promise<void>;
	readonly clientAuth: ApolloClient<NormalizedCacheObject>;
}
