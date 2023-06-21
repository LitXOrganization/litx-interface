import styled from 'styled-components/macro'
import { Info } from 'react-feather'
import AppBody from '../AppBody'

export const StyledInfo = styled(Info)`
    opacity: 0.6;
    color: #2f567b;
    height: 16px;
    width: 16px;

    :hover {
        opacity: 0.8;
    }
`

export const WrappedAppBody = styled(AppBody)`
    ${({ theme }) => theme.mediaWidth.upToSmall`
        margin-top: 6rem;
    `}
`
