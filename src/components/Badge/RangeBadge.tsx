import Badge, { BadgeVariant } from "components/Badge";
import styled from "styled-components/macro";
import { MouseoverTooltip } from "../Tooltip";
import { Trans } from "@lingui/macro";
import { AlertCircle } from "react-feather";

const BadgeWrapper = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    user-select: none;
    margin-right: 0.5rem;
`;

const BadgeText = styled.div`
    font-weight: 500;
    font-size: 14px;
    cursor: default;
`;

const ActiveDot = styled.span`
    background-color: #9ff8c4;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    margin-right: 4px;
`;

interface RangeBadgeProps {
    removed: boolean | undefined;
    inRange: boolean | undefined;
}

export default function RangeBadge({ removed, inRange }: RangeBadgeProps) {
    return (
        <BadgeWrapper>
            {removed ? (
                <MouseoverTooltip text={<Trans>Your position has 0 liquidity, and is not earning fees.</Trans>}>
                    <Badge variant={BadgeVariant.DEFAULT}>
                        <AlertCircle width={14} height={14} />
                        &nbsp;
                        <BadgeText>
                            <Trans>Closed</Trans>
                        </BadgeText>
                    </Badge>
                </MouseoverTooltip>
            ) : inRange ? (
                <MouseoverTooltip text={<Trans>The price of this pool is within your selected range. Your position is currently earning fees.</Trans>}>
                    <Badge variant={BadgeVariant.DEFAULT}>
                        <ActiveDot /> &nbsp;
                        <BadgeText>
                            <Trans>In range</Trans>
                        </BadgeText>
                    </Badge>
                </MouseoverTooltip>
            ) : (
                <MouseoverTooltip text={<Trans>The price of this pool is outside of your selected range. Your position is not currently earning fees.</Trans>}>
                    <Badge variant={BadgeVariant.WARNING}>
                        <AlertCircle width={14} height={14} />
                        &nbsp;
                        <BadgeText>
                            <Trans>Out of range</Trans>
                        </BadgeText>
                    </Badge>
                </MouseoverTooltip>
            )}
        </BadgeWrapper>
    );
}
