import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { darken } from 'polished'
import RangeBadge from '../Badge/RangeBadge'
import { RowBetween } from 'components/Row'

export const LinkRow = styled(Link)`
  align-items: center;
  border-radius: 20px;
  display: flex;
  cursor: pointer;
  user-select: none;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => 'var(--text1)'};
  margin: 8px 0;
  padding: 16px;
  text-decoration: none;
  font-weight: 500;
  background-color: rgba(60, 97, 126, 0.5);

  &:last-of-type {
    margin: 8px 0 0 0;
  }
  & > div:not(:first-child) {
    text-align: center;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    row-gap: 12px;
    padding: 14px 0;
  `};
`
export const PositionHeader = styled(RowBetween)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `}
`
const DataLineItem = styled.div`
  font-size: 14px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  background-color: transparent;
    padding: 12px!important;
`};
`
export const RangeLineItem = styled(DataLineItem)`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 4px;
  width: 100%;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  background-color: ${({ }) => 'transparent'};
    border-radius: 12px;
    padding: 8px 0;
`};
`
export const DoubleArrow = styled.span`
  margin: 0 2px;
  color: white;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 4px;
    padding: 20px;
  `};
`
export const RangeText = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  background-color: transparent;
    padding: 0;
`};
`
export const ExtentsText = styled.span`
  color: white;
  font-size: 14px;
  margin-right: 4px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`
export const PrimaryPositionIdData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom: 1rem;
  `}
`
export const DataText = styled.div`
  font-weight: 600;
  font-size: 18px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 14px;
  `};
`
export const StatusBadge = styled(RangeBadge)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 1rem;
  `}
`
export const StatusRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  width: fit-content;
  `}
`
