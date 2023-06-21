import styled from 'styled-components/macro'

export const StyledRangeInput = styled.input<{ size: number }>`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    background-color: var(--secondary);
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({ theme }) => 'var(--bg1)'};

    &:hover,
    &:focus {
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0  4px 8px rgba(0, 0, 0, 0.08), 0  16px 24px rgba(0, 0, 0, 0.06),
        0  24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    background-color: var(--secondary);
    border-radius: 100%;
    border: none;
    color: ${({ theme }) => 'var(--bg1)'};

    &:hover,
    &:focus {
      box-shadow: 0  0  1px rgba(0, 0, 0, 0.1), 0  4px 8px rgba(0, 0, 0, 0.08), 0  16px 24px rgba(0, 0, 0, 0.06),
        0  24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    background-color: var(--secondary);
    border-radius: 100%;
    color: ${({ theme }) => 'var(--bg1)'};

    &:hover,
    &:focus {
      box-shadow: 0  0  1px rgba(0, 0, 0, 0.1), 0  4px 8px rgba(0, 0, 0, 0.08), 0  16px 24px rgba(0, 0, 0, 0.06),
        0  24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({ theme }) => 'var(--blue1)'}, ${({ theme }) => 'var(--blue2)'});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({ theme }) => 'var(--bg5)'}, ${({ theme }) => 'var(--bg3)'});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({ theme }) => 'var(--bg5)'};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({ theme }) => 'var(--bg5)'};
  }
  &::-ms-fill-upper {
    background: ${({ theme }) => 'var(--bg3)'};
  }
`
