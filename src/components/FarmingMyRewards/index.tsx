import { useEffect, useMemo, useState } from "react";
import { useFarmingHandlers } from "../../hooks/useFarmingHandlers";
import { useAllTransactions } from "../../state/transactions/hooks";
import Loader from "../Loader";
import CurrencyLogo from "../CurrencyLogo";
import { LoadingShim, RewardClaimButton, Rewards, RewardsRow, RewardTokenInfo, RewardWrapper } from "./styled";
import { formatReward } from "../../utils/formatReward";
import { useSortedRecentTransactions } from "../../hooks/useSortedRecentTransactions";
import { Reward } from "../../models/interfaces";
import { Token } from "@uniswap/sdk-core";
import { WrappedCurrency } from "../../models/types";
import { Trans } from "@lingui/macro";

import AlgebraConfig from "algebra.config";
import { useActiveWeb3React } from "hooks/web3";

export function FarmingMyRewards({ data, refreshing, fetchHandler }: { data: Reward[]; refreshing: boolean; fetchHandler: () => any }) {
    const { chainId } = useActiveWeb3React();

    const allTransactions = useAllTransactions();
    const sortedRecentTransactions = useSortedRecentTransactions();

    const confirmed = useMemo(() => sortedRecentTransactions.filter((tx) => tx.receipt).map((tx) => tx.hash), [sortedRecentTransactions, allTransactions]);

    const { claimHash, claimReward } = useFarmingHandlers() || {};

    const [rewardsLoader, setRewardsLoader] = useState<{ id: string | null; state: boolean }>({ id: null, state: false });

    const isLoading = (id: string) => rewardsLoader.id === id && rewardsLoader.state;

    useEffect(() => {
        fetchHandler();
    }, []);

    useEffect(() => {
        if (!data) return;

        if (typeof claimHash === "string") {
            setRewardsLoader({ id: null, state: false });
        } else if (typeof claimHash !== "string" && confirmed.includes(String(claimHash.hash))) {
            setRewardsLoader({ id: claimHash.id, state: false });
            const _reward = data.find((el) => el.rewardAddress === claimHash.id);

            if (_reward) {
                _reward.amount = "0";
                _reward.trueAmount = "0";
            }
        }
    }, [claimHash, confirmed]);

    const chunkedRewards = useMemo(() => {
        if (!data) return;

        if (!Array.isArray(data) || data.length === 0) return [];

        const _rewards = [[data[0]]];

        let j = 0;

        for (let i = 1; i < data.length; i++) {
            if (i % 3 === 0) {
                j++;
                _rewards.push([]);
            }
            _rewards[j].push(data[i]);
        }

        return _rewards;
    }, [data]);

    if (chunkedRewards?.length === 0) return null;
    return (
        <Rewards>
            {chunkedRewards?.map((el, i) => (
                <RewardsRow key={i}>
                    {el.map((rew, j) => (
                        <RewardWrapper refreshing={refreshing} key={j}>
                            {refreshing && (
                                <LoadingShim>
                                    <Loader style={{ margin: "auto" }} size={"18px"} stroke={"var(--loader)"} />
                                </LoadingShim>
                            )}
                            <CurrencyLogo
                                currency={new Token(AlgebraConfig.CHAIN_PARAMS[chainId || 56].chainId, rew.rewardAddress, 18, rew.symbol) as WrappedCurrency}
                                size={"35px"}
                                style={{ marginRight: "10px" }}
                            />
                            <RewardTokenInfo>
                                <div title={rew.amount}>{formatReward(+rew.amount)}</div>
                                <div title={rew.symbol}>{rew.symbol}</div>
                            </RewardTokenInfo>
                            {isLoading(rew.rewardAddress) ? (
                                <RewardClaimButton>
                                    <span>
                                        <Loader style={{ margin: "auto" }} stroke={"var(--loader)"} />
                                    </span>
                                </RewardClaimButton>
                            ) : (
                                <RewardClaimButton
                                    disabled={+rew.amount === 0}
                                    onClick={() => {
                                        setRewardsLoader({
                                            id: rew.rewardAddress,
                                            state: true,
                                        });
                                        claimReward(rew.rewardAddress);
                                    }}
                                >
                                    <Trans>Claim</Trans>
                                </RewardClaimButton>
                            )}
                        </RewardWrapper>
                    ))}
                </RewardsRow>
            ))}
        </Rewards>
    );
}
