import AlgebraConfig from "algebra.config"
import { ChainId } from "./addresses"

export const ALL_SUPPORTED_CHAIN_IDS: number[] = [
    ChainId.BNB,
    ChainId.PULSE
]

export const L1_CHAIN_IDS = [] as const

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

export const L2_CHAIN_IDS = [] as const

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]

interface L1ChainInfo {
    readonly label: string
}

interface L2ChainInfo extends L1ChainInfo {
    readonly bridge: string
    readonly logoUrl: string
}

type ChainInfo = { readonly [chainId: number]: L1ChainInfo | L2ChainInfo } & {
    readonly [chainId in SupportedL2ChainId]: L2ChainInfo
} &
    { readonly [chainId in SupportedL1ChainId]: L1ChainInfo }

export const CHAIN_INFO: ChainInfo = {
    [ChainId.BNB]: {
        label: AlgebraConfig.CHAIN_PARAMS[ChainId.BNB].chainName
    },
    [ChainId.PULSE]: {
        label: AlgebraConfig.CHAIN_PARAMS[ChainId.PULSE].chainName
    }
}
