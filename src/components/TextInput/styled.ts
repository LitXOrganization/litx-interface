import styled from 'styled-components/macro'

export const Input = styled.input<{ error?: boolean; fontSize?: string }>`
  font-size: ${({ fontSize }) => fontSize || '1.25rem'};
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: ${({ theme }) => 'var(--bg1)'};
  transition: color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')};
  color: ${({ error, theme }) => (error ? 'var(--red1)' : 'var(--text1)')};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  padding: 0;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => 'var(--text4)'};
    opacity: 1;
  }
`
export const TextAreaInput = styled.textarea<{ error?: boolean; fontSize?: string }>`
  font-size: ${({ fontSize }) => fontSize || '1.25rem'};
  outline: none;
  border: none;
  flex: 1 1 auto;
  resize: none;
  background-color: ${({ theme }) => 'var(--bg1)'};
  transition: color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')};
  color: ${({ error, theme }) => (error ? 'var(--red1)' : 'var(--text1)')};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  line-height: 1.2;
  padding: 0;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => 'var(--text4)'};
    opacity: 1;
  }
`
