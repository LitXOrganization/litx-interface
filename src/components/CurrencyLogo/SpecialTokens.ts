import AlgebraConfig from "algebra.config"
import { ChainId } from "constants/addresses"

interface SpecialTokensInterface {
    [key: string]: string
}

export const specialTokensBNB: SpecialTokensInterface = Object.entries(AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.BNB].tokensLogos).reduce((acc, [address, logo]) => ({
    ...acc,
    [address]: logo
}), {})


export const specialTokensPulse: SpecialTokensInterface = Object.entries(AlgebraConfig.DEFAULT_TOKEN_LIST[ChainId.PULSE].tokensLogos).reduce((acc, [address, logo]) => ({
    ...acc,
    [address]: logo
}), {})

