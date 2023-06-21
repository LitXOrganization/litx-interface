import React from "react";
// @ts-ignore
import { useActiveWeb3React } from "../../hooks/web3";
import { stringToColour } from "../../utils/stringToColour";
import { specialTokensBNB, specialTokensPulse } from "./SpecialTokens";
import { StyledImgLogo, StyledLogo } from "./styled";
import { WrappedCurrency } from "../../models/types";

import AlgebraConfig from "algebra.config";

export const getTokenLogoURL = (address: string) => `https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/${address}/logo.png`;

export default function CurrencyLogo({ currency, size = "24px", style, ...rest }: { currency?: WrappedCurrency; size?: string; style?: React.CSSProperties }) {
    const { chainId } = useActiveWeb3React();

    let logo;

    if (chainId && chainId === AlgebraConfig.CHAIN_PARAMS[chainId].chainId) {
        logo = AlgebraConfig.CHAIN_PARAMS[chainId].wrappedNativeCurrency.logo;
    }

    if (!currency) return <div />;

    if (currency.address?.toLowerCase() in specialTokensBNB) {
        return <StyledImgLogo src={specialTokensBNB[currency.address.toLowerCase()]} size={size} style={style} {...rest} />;
    }

    if (currency.address?.toLowerCase() in specialTokensPulse) {
        return <StyledImgLogo src={specialTokensPulse[currency.address.toLowerCase()]} size={size} style={style} {...rest} />;
    }

    if (currency.isNative) {
        return <StyledImgLogo src={logo} size={size} style={style} {...rest} />;
    }

    return (
        <StyledLogo
            size={size}
            style={{
                ...style,
                background: stringToColour(currency.symbol).background,
                color: stringToColour(currency.symbol).text,
                border: stringToColour(currency.symbol).border,

                fontSize: size === "18px" ? "8px" : size === "24px" ? "12px" : "10px",
            }}
            {...rest}
        >
            {currency.symbol?.slice(0, 2)}
        </StyledLogo>
    );
}
