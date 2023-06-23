import { Trans } from "@lingui/macro";
import CurrencyLogo from "components/CurrencyLogo";
import Loader from "components/Loader";
import { useToken } from "hooks/Tokens";
import { WrappedCurrency } from "models/types";
import { Star, Zap } from "react-feather";

import "./index.scss";
import { ChainId } from "constants/addresses";
import { useActiveWeb3React } from "hooks/web3";

import AlgebraConfig from "algebra.config";

interface IPopularPairs {
    pairs: [string, string][] | undefined;
    handlePopularPairSelection: (pair: [string, string]) => void;
}

export function PopularPairs({ pairs, handlePopularPairSelection }: IPopularPairs) {
    return (
        <div>
            <div className={"pair-list-wrapper pl-1 mm_pl-0"}>
                <div className="mb-1 f f-ac">
                    <Star style={{ display: "block" }} fill={"white"} size={15} />
                    <span className="ml-05">
                        <Trans>Popular pairs</Trans>
                    </span>
                </div>
                {pairs ? (
                    <div className="mb-1">
                        <ul className="pair-list">
                            {pairs.map((pair, key) => (
                                <li key={key} className="pair-list-item">
                                    <PopularPair handlePopularPairSelection={handlePopularPairSelection} pair={pair} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="mb-1">
                        <Loader stroke={"var(--loader)"} />
                    </div>
                )}
            </div>
        </div>
    );
}

function PopularPair({ pair, handlePopularPairSelection }: { pair: [string, string]; handlePopularPairSelection: (pair: [string, string]) => void }) {
    const tokenA = useToken(pair[1]);
    const tokenB = useToken(pair[0]);

    const { chainId } = useActiveWeb3React();

    if (!tokenA || !tokenB) return <div></div>;

    const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA];

    const WMATIC = AlgebraConfig.CHAIN_PARAMS[chainId || ChainId.BNB].wrappedNativeCurrency.address;

    return (
        <div onClick={() => handlePopularPairSelection([token0.address.toLowerCase(), token1.address.toLowerCase()])} className={`f f-ac f-jc popular-pair`}>
            <span className="popular-pair__logo">
                <CurrencyLogo currency={token0 as WrappedCurrency} size={"16px"} />
            </span>
            <span>{token0.address.toLowerCase() === WMATIC ? AlgebraConfig.CHAIN_PARAMS[chainId || ChainId.BNB].wrappedNativeCurrency.symbol : token0.symbol}</span>
            <span className="popular-pair__plus">+</span>
            <span className="popular-pair__logo">
                <CurrencyLogo currency={token1 as WrappedCurrency} size={"16px"} />
            </span>
            <span>{token1.address.toLowerCase() === WMATIC ? AlgebraConfig.CHAIN_PARAMS[chainId || ChainId.BNB].wrappedNativeCurrency.symbol : token1.symbol}</span>
        </div>
    );
}
