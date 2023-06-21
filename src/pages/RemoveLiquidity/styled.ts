import { MaxButton } from 'pages/Pool/styleds'
import { Text } from 'rebass'
import styled from 'styled-components/macro'
import { cssVar, darken } from 'polished'

export const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    min-width: 340px;
  `};
`

export const SmallMaxButton = styled(MaxButton)`
  font-size: 12px;
  background: transparent;
  color: white;
  border: 1px solid ${({ theme }) => 'var(--primary)'};
  &:hover {
    border: 1px solid ${({ theme }) => darken(.1, String(cssVar('--primary')))}
  }
  &:focus {
    border: 1px solid ${({ theme }) => darken(.3, String(cssVar('--primary')))};
    outline: none;
  }
`

export const ResponsiveHeaderText = styled(Text)`
  font-size: 40px;
  font-weight: 500;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
     font-size: 24px
  `};
`
