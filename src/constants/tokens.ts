import { Token } from '@uniswap/sdk-core'
import { Matic } from '../lib/src/entities/matic'
import { WNATIVE } from '../lib/src/entities/wnative'

import AlgebraConfig from "algebra.config"
import { ChainId } from "./addresses"

export const [
    DEFAULT_TOKENS_BNB,
    TOKENS_FOR_MULTIHOP_BNB,
    STABLE_TOKENS_BNB
] = [
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.BNB].defaultTokens,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.BNB].tokensForMultihop,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.BNB].stableTokens,
].map(tokens => Object.entries(tokens).map(([address, { name, symbol, decimals }]: any) => new Token(AlgebraConfig.CHAIN_PARAMS[ChainId.BNB].chainId, address, decimals, symbol, name)))

export const [
    DEFAULT_TOKENS_PULSE,
    TOKENS_FOR_MULTIHOP_PULSE,
    STABLE_TOKENS_PULSE
] = [
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.PULSE].defaultTokens,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.PULSE].tokensForMultihop,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.PULSE].stableTokens,
].map(tokens => Object.entries(tokens).map(([address, { name, symbol, decimals }]: any) => new Token(AlgebraConfig.CHAIN_PARAMS[ChainId.PULSE].chainId, address, decimals, symbol, name)))


export const STABLE_TOKEN_FOR_USD_PRICE_BNB = new Token(
    AlgebraConfig.CHAIN_PARAMS[ChainId.BNB].chainId,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.BNB].stableTokenForUSDPrice.address,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.BNB].stableTokenForUSDPrice.decimals,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.BNB].stableTokenForUSDPrice.symbol,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.BNB].stableTokenForUSDPrice.name,
)

export const STABLE_TOKEN_FOR_USD_PRICE_PULSE = new Token(
    AlgebraConfig.CHAIN_PARAMS[ChainId.PULSE].chainId,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.PULSE].stableTokenForUSDPrice.address,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.PULSE].stableTokenForUSDPrice.decimals,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.PULSE].stableTokenForUSDPrice.symbol,
    AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.PULSE].stableTokenForUSDPrice.name,
)

export const WMATIC_EXTENDED: { [chainId: number]: Token } = {
    ...WNATIVE
}

export class ExtendedEther extends Matic {
    private static _cachedEther: { [chainId: number]: ExtendedEther } = {}

    public get wrapped(): Token {
        if (this.chainId in WMATIC_EXTENDED) return WMATIC_EXTENDED[this.chainId]
        throw new Error('Unsupported chain ID')
    }

    public static onChain(chainId: number): ExtendedEther {
        return this._cachedEther[chainId] ?? (this._cachedEther[chainId] = new ExtendedEther(chainId))
    }
}
