import { readableColor } from "polished";
import { PropsWithChildren } from "react";
import styled, { DefaultTheme } from "styled-components/macro";
import { Color } from "theme/styled";

export enum BadgeVariant {
    DEFAULT = "DEFAULT",
    NEGATIVE = "NEGATIVE",
    POSITIVE = "POSITIVE",
    PRIMARY = "PRIMARY",
    WARNING = "WARNING",
    WARNING_OUTLINE = "WARNING_OUTLINE",
}

interface BadgeProps {
    variant?: BadgeVariant;
}

function pickBackgroundColor(variant: BadgeVariant | undefined, theme: DefaultTheme): Color {
    switch (variant) {
        case BadgeVariant.NEGATIVE:
            return "var(--error)";
        case BadgeVariant.POSITIVE:
            return "#02365e";
        case BadgeVariant.PRIMARY:
            return "#02365e";
        case BadgeVariant.WARNING:
            return "var(--warning)";
        case BadgeVariant.WARNING_OUTLINE:
            return "transparent";
        default:
            return "#aaa7ff";
    }
}

function pickBorder(variant: BadgeVariant | undefined, theme: DefaultTheme): string {
    switch (variant) {
        case BadgeVariant.WARNING_OUTLINE:
            return `1px solid ${"var(--warning)"}`;
        default:
            return "unset";
    }
}

function pickFontColor(variant: BadgeVariant | undefined, theme: DefaultTheme): string {
    switch (variant) {
        case BadgeVariant.NEGATIVE:
            return "var(--error)";
        case BadgeVariant.POSITIVE:
            return "var(--success)";
        case BadgeVariant.WARNING:
            return "var(--black)";
        case BadgeVariant.WARNING_OUTLINE:
            return "var(--black)";
        default:
            return "var(--bg2)";
    }
}

const Badge = styled.div<PropsWithChildren<BadgeProps>>`
    align-items: center;
    background-color: ${({ theme, variant }) => pickBackgroundColor(variant, theme)};
    border: ${({ theme, variant }) => pickBorder(variant, theme)};
    border-radius: 0.5rem;
    color: ${({ theme, variant }) => pickFontColor(variant, theme)};
    display: inline-flex;
    padding: 4px 6px;
    justify-content: center;
    font-weight: 500;
    user-select: none;
    cursor: default;
`;

export default Badge;
