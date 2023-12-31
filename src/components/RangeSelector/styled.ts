import styled from 'styled-components/macro'
import { ButtonOutlined } from '../Button'
import { RowBetween } from '../Row'


//PresersButtons
export const Button = styled(ButtonOutlined).attrs(() => ({
    padding: '4px',
    borderRadius: '8px'
}))`
    color: ${({ theme }) => 'var(--text1)'};
    flex: 1;
    background-color: ${({ theme }) => 'var(--bg2)'};
`

//index
export const RowBetweenSrtyled = styled(RowBetween)`
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    flex-direction: column !important;
  `}
`
