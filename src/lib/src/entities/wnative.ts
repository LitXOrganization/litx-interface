import { Token } from '@uniswap/sdk-core'
import AlgebraConfig from "algebra.config"
import { ChainId } from "constants/addresses"

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WNATIVE: { [chainId: number]: Token } = {
    [ChainId.BNB]: new Token(ChainId.BNB, AlgebraConfig.CHAIN_PARAMS[ChainId.BNB].wrappedNativeCurrency.address, AlgebraConfig.CHAIN_PARAMS[ChainId.BNB].wrappedNativeCurrency.decimals, AlgebraConfig.CHAIN_PARAMS[ChainId.BNB].nativeCurrency.symbol, AlgebraConfig.CHAIN_PARAMS[ChainId.BNB].nativeCurrency.name),
    [ChainId.PULSE]: new Token(ChainId.PULSE, AlgebraConfig.CHAIN_PARAMS[ChainId.PULSE].wrappedNativeCurrency.address, AlgebraConfig.CHAIN_PARAMS[ChainId.PULSE].wrappedNativeCurrency.decimals, AlgebraConfig.CHAIN_PARAMS[ChainId.PULSE].nativeCurrency.symbol, AlgebraConfig.CHAIN_PARAMS[ChainId.PULSE].nativeCurrency.name)
}
