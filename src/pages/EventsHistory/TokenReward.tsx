import React from "react";
import CurrencyLogo from "../../components/CurrencyLogo";
import { Token } from "@uniswap/sdk-core";
import { WrappedCurrency } from "../../models/types";

import AlgebraConfig from "algebra.config";
import { useActiveWeb3React } from "hooks/web3";
import { ChainId } from "constants/addresses";

interface TokenRewardProps {
    token: { address: string; symbol: string } | null;
    reward: number | null;
}

export default function TokenReward({ token, reward }: TokenRewardProps) {
    const { chainId } = useActiveWeb3React();

    return (
        <div className={"f f-ac"}>
            {token ? <CurrencyLogo size="2rem" currency={new Token(chainId || ChainId.BNB, token.address, 18, token.symbol) as WrappedCurrency} /> : <span className={"ml-05"}>-</span>}
            <div className={"ml-05"}>
                <div>{reward}</div>
                <div>{token?.symbol} </div>
            </div>
        </div>
    );
}
