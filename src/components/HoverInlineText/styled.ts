import styled from 'styled-components/macro'

export const TextWrapper = styled.span<{ margin: boolean; link?: boolean; fontSize?: string; adjustSize?: boolean }>`
    margin-left: ${({ margin }) => margin && '4px'};
    color: var(--text1) !important;
    font-size: ${({ fontSize }) => fontSize ?? 'inherit'};

    &:hover {
        color: var(--text2) !important;
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ adjustSize }) => adjustSize && '12px'};
    }
`
