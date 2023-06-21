import styled, { keyframes } from 'styled-components/macro'

const move = keyframes`
    0% {
        left: 50%;
        top: -40%
    }
    60%, 100% {
        left: -40%;
        top: 60%;
    }
`

const moveReversed = keyframes`
    0% {
        left: 50%;
        top: 120%
    }
    60%, 100% {
        left: 100%;
        top: 60%;
    }
`

export const Particles = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;

    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        display: none;
    `}
`

export const ParticlesInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Particle = styled.div<{ width: number; height: number; color: string; top: number; left: number; delay: number; reversed?: boolean; }>`
    position: absolute;
    background: ${({ color }) => color};
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: 50px;
    animation: 10s ${({ reversed }) => reversed ? moveReversed : move} linear infinite;
    animation-delay: ${({ delay }) => delay}s;
    transform: rotate(-45deg) translate(${({ left, top }) => (`${left}px,${top}px`)});
    left: ${({ reversed }) => reversed ? '50%' : '-50%'};
    top:  ${({ reversed }) => reversed ? '150%' : '-50%'};
`
