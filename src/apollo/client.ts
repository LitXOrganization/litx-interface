import { ApolloClient, InMemoryCache } from '@apollo/client'
import AlgebraConfig from 'algebra.config'
import { ChainId } from "constants/addresses"

export const healthClient = new ApolloClient({
    uri: 'https://api.thegraph.com/index-node/graphql',
    cache: new InMemoryCache()
})

export const blockClientBNB = new ApolloClient({
    uri: AlgebraConfig.SUBGRAPH[ChainId.BNB].blocklyticsURL,
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache'
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})

export const clientBNB = new ApolloClient({
    uri: AlgebraConfig.SUBGRAPH[ChainId.BNB].infoURL,
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache'
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})

export const farmingClientBNB = new ApolloClient({
    uri: AlgebraConfig.SUBGRAPH[ChainId.BNB].farmingURL,
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache'
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})

export const blockClientPulse = new ApolloClient({
    uri: AlgebraConfig.SUBGRAPH[ChainId.PULSE].blocklyticsURL,
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache'
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})

export const clientPulse = new ApolloClient({
    uri: AlgebraConfig.SUBGRAPH[ChainId.PULSE].infoURL,
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache'
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})

export const farmingClientPulse = new ApolloClient({
    uri: AlgebraConfig.SUBGRAPH[ChainId.PULSE].farmingURL,
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache'
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})
