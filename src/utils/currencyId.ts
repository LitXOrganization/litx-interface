import { Currency } from '@uniswap/sdk-core'

import AlgebraConfig from "algebra.config"

export function currencyId(currency: Currency, chainId: number): string {
    let chainSymbol = AlgebraConfig.CHAIN_PARAMS[chainId].wrappedNativeCurrency.symbol

    if (chainId && chainId in AlgebraConfig.CHAIN_PARAMS) {
        chainSymbol = AlgebraConfig.CHAIN_PARAMS[chainId].wrappedNativeCurrency.symbol
    }

    if (currency.isNative) return chainSymbol
    if (currency.isToken) return currency.address
    throw new Error('invalid currency')
}
