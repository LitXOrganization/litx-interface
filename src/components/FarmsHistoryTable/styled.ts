import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { DarkGreyCard } from 'components/Card'
import { ClickableText, Label } from 'components/Text'

export const PageButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
`

export const Arrow = styled.div<{ faded: boolean }>`
  color: white;
  opacity: ${(props) => (props.faded ? 0.3 : 1)};
  padding: 0 20px;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`

export const LabelStyled = styled(Label)`
  font-size: 14px;
  justify-content: flex-start;
`

export const ClickableTextStyled = styled(ClickableText)`
  font-size: 14px;
  align-items: center;
  justify-content: flex-start;
  text-align: start;
  &:hover {
    opacity: 1;
  }
`

export const Wrapper = styled(DarkGreyCard)`
  width: 100%;
  background-color: rgba(60, 97, 126, 0.5);
  ${({ theme }) => theme.mediaWidth.upToMedium`
    min-width: 900px;
  `};
`

export const ResponsiveGrid = styled.div`
  display: grid;
  position: relative;
  grid-gap: 1em;
  align-items: center;
  grid-template-columns: 20px repeat(3, 1.1fr) repeat(2, .9fr) 1.1fr;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 20px repeat(3, 1.1fr) repeat(2, .9fr) 1.1fr;
  }
`

export const ChartBadge = styled(NavLink)`
  background: var(--primary);
  margin-left: 10px;
  border-radius: 6px;
  padding: 2px 3px;
  & > * {
    display: block;
  }
`

export const AprInfo = styled.span`
  background-color: #02365e;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  z-index: 101;
`

export const LinkWrapper = styled.a`
  display: flex;
  text-decoration: none;
  svg {
    margin-left: 8px;
  }
`

export const HelperDropdown = styled.span`
  position: absolute;
  display: none;
  right: 0;
  font-size: 12px;
  bottom: -2.5rem;
  padding: 7px 9px;
  white-space: nowrap;
  background: white;
  border-radius: 4px;
  color: black;
  z-index: 30;
`

export const APRWrapper = styled.span`
  position: relative;
  &:hover {
    & > ${HelperDropdown} {
      display: block;
    }
  }
`
