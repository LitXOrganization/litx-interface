import DoubleCurrencyLogo from "../DoubleLogo";
import { Token } from "@uniswap/sdk-core";
import { WrappedCurrency } from "../../models/types";
import { TYPE } from "../../theme";
import { BarChart2, ExternalLink } from "react-feather";
import { feeTierPercent } from "../../utils";
import { NavLink } from "react-router-dom";
import React from "react";

import AlgebraConfig from "algebra.config";
import { useActiveWeb3React } from "hooks/web3";

export const Pool = ({ token0, token1, fee, address }: any) => {
    const { chainId } = useActiveWeb3React();

    const poolTitle = () => {
        if (!token1 || !token0) return [];
        if (token0.symbol === "USDC") {
            return [token1.symbol, token0.symbol];
        }
        return [token0.symbol, token1.symbol];
    };
    const _poolTitle = poolTitle();

    return (
        <div className={"f f-jc f-ac"}>
            <DoubleCurrencyLogo
                currency0={new Token(AlgebraConfig.CHAIN_PARAMS[chainId || 56].chainId, token0?.id, 18, token0.symbol) as WrappedCurrency}
                currency1={new Token(AlgebraConfig.CHAIN_PARAMS[chainId || 56].chainId, token1?.id, 18, token1.symbol) as WrappedCurrency}
                size={20}
            />
            <a className={"link f-ac"} href={`${AlgebraConfig.CHAIN_PARAMS[chainId || 56].blockExplorerURL}/address/${address}`} rel="noopener noreferrer" target="_blank">
                <TYPE.label ml="8px">
                    {_poolTitle[0]}/{_poolTitle[1]}
                </TYPE.label>
                <ExternalLink size={16} color={"var(--text1)"} />
            </a>
            <span className={"fee-badge ml-05 mr-05"}>{feeTierPercent(+fee)}</span>
            <NavLink className={"chart-link hover-op trans-op"} to={`/info/pools/${address}`}>
                <BarChart2 size={18} stroke={"white"} />
            </NavLink>
        </div>
    );
};
