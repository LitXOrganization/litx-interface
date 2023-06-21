import styled from 'styled-components/macro'
import { AutoColumn } from '../Column'

export const Wrapper = styled(AutoColumn)`
  margin-right: 8px;
  height: 100%;
`
export const Grouping = styled(AutoColumn)`
  width: fit-content;
  padding: 4px;
  border-radius: 16px;
`
export const Circle = styled.div<{ confirmed?: boolean; disabled?: boolean }>`
  width: 48px;
  height: 48px;
  background-color: ${({ theme, confirmed, disabled }) =>
    disabled ? 'var(--bg3)' : confirmed ? 'var(--green1)' : 'var(--primary1)'};
  border-radius: 50%;
  color: ${({ theme, disabled }) => (disabled ? 'var(--text3)' : 'var(--text1)')};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 8px;
  font-size: 16px;
  padding: 1rem;
`
export const CircleRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
