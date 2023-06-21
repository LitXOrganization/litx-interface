import styled from 'styled-components/macro'
import { Settings, X } from 'react-feather'

export const StyledMenuIcon = styled(Settings)`
  height: 20px;
  width: 20px;

  > * {
    stroke: var(--icon);
  }

  :hover {
    opacity: 0.7;
  }
`
export const StyledCloseIcon = styled(X)`
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }

  > * {
    stroke: var(--text1);
  }
`
export const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  border-radius: 0.5rem;
  height: 20px;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
  }
`
export const EmojiWrapper = styled.div`
  position: absolute;
  bottom: -6px;
  right: 0;
  font-size: 14px;
`
export const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`
export const MenuFlyout = styled.span`
  min-width: 20.125rem;
  background-color: var(--panel1);
  border: 1px solid var(--border1);
  color: var(--text1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 2rem;
  right: 0;
  z-index: 100;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    min-width: 18.125rem;
  `};

  user-select: none;
`
export const Break = styled.div`
  width: 100%;
  height: 1px;
  background: var(--primary);
`
export const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: #b3e6ff;
  border-radius: 20px;
`
