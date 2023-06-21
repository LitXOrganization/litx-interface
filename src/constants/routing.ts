// a list of tokens by chain
import { Currency, Token } from '@uniswap/sdk-core'
import { DEFAULT_TOKENS_BNB, TOKENS_FOR_MULTIHOP_BNB, DEFAULT_TOKENS_PULSE, TOKENS_FOR_MULTIHOP_PULSE, ExtendedEther, WMATIC_EXTENDED } from './tokens'

import AlgebraConfig from "algebra.config"
import { ChainId } from "./addresses"

type ChainTokenList = {
    readonly [chainId: number]: Token[]
}

type ChainCurrencyList = {
    readonly [chainId: number]: Currency[]
}

const WETH_ONLY: ChainTokenList = Object.fromEntries(
    Object.entries(WMATIC_EXTENDED).map(([key, value]) => [key, [value]])
)

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
    ...WETH_ONLY,
    [ChainId.BNB]: [...WETH_ONLY[ChainId.BNB], ...TOKENS_FOR_MULTIHOP_BNB],
    [ChainId.PULSE]: [...WETH_ONLY[ChainId.PULSE], ...TOKENS_FOR_MULTIHOP_PULSE],
}
export const ADDITIONAL_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {}
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {}

/**
 * Shows up in the currency select for swap and add liquidity
 */
export const COMMON_BASES: ChainCurrencyList = {
    [ChainId.BNB]: [
        ExtendedEther.onChain(ChainId.BNB),
        ...DEFAULT_TOKENS_BNB,
    ],
    [ChainId.PULSE]: [
        ExtendedEther.onChain(ChainId.PULSE),
        ...DEFAULT_TOKENS_PULSE
    ]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
    ...WETH_ONLY,
    [ChainId.BNB]: [...WETH_ONLY[ChainId.BNB], ...TOKENS_FOR_MULTIHOP_BNB],
    [ChainId.PULSE]: [...WETH_ONLY[ChainId.PULSE], ...TOKENS_FOR_MULTIHOP_PULSE],
}
export const PINNED_PAIRS: { readonly [chainId: number]: [Token, Token][] } = {
}
