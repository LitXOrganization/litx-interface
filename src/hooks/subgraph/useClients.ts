import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { blockClientBNB, clientBNB, farmingClientBNB, blockClientPulse, clientPulse, farmingClientPulse } from '../../apollo/client'
import { useActiveWeb3React } from '../web3'

import AlgebraConfig from "algebra.config"
import { ChainId } from "constants/addresses"

export function useBlockClient(): ApolloClient<NormalizedCacheObject> {
    const { chainId } = useActiveWeb3React()
    switch (chainId) {
        case ChainId.BNB:
            return blockClientBNB
        case ChainId.PULSE:
            return blockClientPulse
        default:
            return blockClientBNB
    }
}

export function useDataClient(): ApolloClient<NormalizedCacheObject> {
    const { chainId } = useActiveWeb3React()
    switch (chainId) {
        case ChainId.BNB:
            return clientBNB
        case ChainId.PULSE:
            return clientPulse
        default:
            return clientBNB
    }
}

export function useFarmingClient(): ApolloClient<NormalizedCacheObject> {
    const { chainId } = useActiveWeb3React()
    switch (chainId) {
        case ChainId.BNB:
            return farmingClientBNB
        case ChainId.PULSE:
            return farmingClientPulse
        default:
            return farmingClientBNB
    }
}


export function useClients(): {
    dataClient: ApolloClient<NormalizedCacheObject>
    farmingClient: ApolloClient<NormalizedCacheObject>
    blockClient: ApolloClient<NormalizedCacheObject>
} {
    const dataClient = useDataClient()
    const farmingClient = useFarmingClient()
    const blockClient = useBlockClient()

    return {
        dataClient,
        farmingClient,
        blockClient,
    }
}
