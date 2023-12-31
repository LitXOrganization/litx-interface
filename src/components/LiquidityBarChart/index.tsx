import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BarChart from "./BarChart";
import { isMobile } from "react-device-detect";
import Loader from "../Loader";
import { TickMath } from "@uniswap/v3-sdk";
import { computePoolAddress } from "../../hooks/computePoolAddress";
import JSBI from "jsbi";
import { isAddress } from "../../utils";
import { CurrencyAmount, Token } from "@uniswap/sdk-core";
import { Pool } from "../../lib/src";
import { BigNumber } from "@ethersproject/bignumber";
import { LiquidityChartData, ProcessedData } from "../../models/interfaces";
import "./index.scss";

import AlgebraConfig from "algebra.config";
import { useActiveWeb3React } from "hooks/web3";

interface LiquidityBarChartProps {
    data: LiquidityChartData;
    token0: string;
    token1: string;
    refreshing: boolean;
    zoom: number;
}

export default function LiquidityBarChart({ data, token0, token1, refreshing, zoom }: LiquidityBarChartProps) {
    const { chainId } = useActiveWeb3React();

    const MAX_UINT128 = BigNumber.from(2).pow(128).sub(1);

    const [processedData, setProcessedData] = useState<ProcessedData[] | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    const formattedAddress0 = isAddress(data?.token0?.address);
    const formattedAddress1 = isAddress(data?.token1?.address);

    // parsed tokens
    const _token0 = useMemo(() => {
        return data && formattedAddress0 && formattedAddress1 ? new Token(AlgebraConfig.CHAIN_PARAMS[chainId || 56].chainId, formattedAddress0, +data.token0.decimals) : undefined;
    }, [formattedAddress0, formattedAddress1, data]);

    const _token1 = useMemo(() => {
        return data && formattedAddress0 && formattedAddress1 ? new Token(AlgebraConfig.CHAIN_PARAMS[chainId || 56].chainId, formattedAddress1, +data.token1.decimals) : undefined;
    }, [formattedAddress1, data]);

    useEffect(() => {
        if (!data || !data.ticksProcessed) return;

        async function processTicks() {
            const _data = await Promise.all(
                data.ticksProcessed.map(async (t: any, i: number) => {
                    const active = t.tickIdx === data.activeTickIdx;
                    const sqrtPriceX96 = TickMath.getSqrtRatioAtTick(t.tickIdx);
                    const mockTicks = [
                        {
                            index: t.tickIdx - 60,
                            liquidityGross: t.liquidityGross,
                            liquidityNet: JSBI.multiply(t.liquidityNet, JSBI.BigInt("-1")),
                        },
                        {
                            index: t.tickIdx,
                            liquidityGross: t.liquidityGross,
                            liquidityNet: t.liquidityNet,
                        },
                    ];
                    const pool = _token0 && _token1 ? new Pool(_token0, _token1, 500, sqrtPriceX96, t.liquidityActive, t.tickIdx, mockTicks) : undefined;
                    const nextSqrtX96 = data.ticksProcessed[i - 1] ? TickMath.getSqrtRatioAtTick(data.ticksProcessed[i - 1].tickIdx) : undefined;

                    const maxAmountToken0 = _token0 ? CurrencyAmount.fromRawAmount(_token0, MAX_UINT128.toString()) : undefined;
                    const outputRes0 = pool && maxAmountToken0 ? await pool.getOutputAmount(maxAmountToken0, nextSqrtX96) : undefined;

                    const token1Amount = outputRes0?.[0] as CurrencyAmount<Token> | undefined;

                    const amount0 = token1Amount ? parseFloat(token1Amount.toExact()) * parseFloat(t.price1) : 0;
                    const amount1 = token1Amount ? parseFloat(token1Amount.toExact()) : 0;

                    return {
                        index: i,
                        isCurrent: active,
                        activeLiquidity: parseFloat(t.liquidityActive.toString()),
                        price0: parseFloat(t.price0),
                        price1: parseFloat(t.price1),
                        tvlToken0: amount0,
                        tvlToken1: amount1,
                        token0: token0,
                        token1: token1,
                    };
                })
            );
            setProcessedData(_data);
        }

        processTicks();
    }, [data, token0, token1]);

    const formattedData = useMemo(() => {
        if (!processedData) return undefined;
        if (processedData && processedData.length === 0) return undefined;

        if (zoom === 1) return processedData;

        const middle = Math.round(processedData.length / 2);
        const chunkLength = Math.round(processedData.length / zoom);

        return processedData.slice(middle - chunkLength, middle + chunkLength);
    }, [processedData, zoom]);

    const activeTickIdx = useMemo(() => {
        if (!formattedData) return;

        let idx;
        for (const i of formattedData) {
            if (i.isCurrent) {
                idx = i.index;
            }
        }

        return idx;
    }, [formattedData, zoom]);

    return (
        <div className={"w-100 liquidity-chart"} ref={ref}>
            {refreshing ? (
                <div className={"liquidity-chart__mock-loader"}>
                    <Loader stroke={"var(--loader)"} size={"25px"} />
                </div>
            ) : (
                <BarChart
                    data={formattedData || undefined}
                    activeTickIdx={activeTickIdx}
                    dimensions={{
                        width: isMobile ? (ref && ref.current && ref.current.offsetWidth - 10) || 0 : 1020,
                        height: 400,
                        margin: { top: isMobile ? 80 : 30, right: 20, bottom: isMobile ? 70 : 30, left: isMobile ? 0 : 50 },
                    }}
                    isMobile={isMobile}
                />
            )}
        </div>
    );
}
