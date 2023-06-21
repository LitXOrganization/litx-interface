import { Currency, CurrencyAmount, Percent } from "@uniswap/sdk-core";
import { useMemo } from "react";
import useTheme from "../../hooks/useTheme";
import { TYPE } from "../../theme";
import { warningSeverity } from "../../utils/prices";
import HoverInlineText from "components/HoverInlineText";
import { Trans } from "@lingui/macro";

interface FiatValueProps {
    fiatValue: CurrencyAmount<Currency> | null | undefined;
    priceImpact?: Percent;
}

export function FiatValue({ fiatValue, priceImpact }: FiatValueProps) {
    const theme = useTheme();
    const priceImpactColor = useMemo(() => {
        if (!priceImpact) return undefined;
        if (priceImpact.lessThan("0")) return "#15af56";
        const severity = warningSeverity(priceImpact);
        if (severity < 1) return "black";
        if (severity < 3) return "var(--yellow1)";
        return "var(--red1)";
    }, [priceImpact, "var(--green1)", "var(--red1)", "var(--text3)", "var(--yellow1)"]);

    return (
        <TYPE.body fontSize={14} color={"var(--text1)"}>
            {fiatValue ? (
                <Trans>
                    ~$ <HoverInlineText text={fiatValue?.toSignificant(6, { groupSeparator: "," })} />
                </Trans>
            ) : (
                "Can't estimate price"
            )}
            {priceImpact ? (
                <span style={{ color: priceImpactColor }}>
                    {" "}
                    (<Trans>{priceImpact.multiply(-1).toSignificant(3)}%</Trans>)
                </span>
            ) : null}
        </TYPE.body>
    );
}
