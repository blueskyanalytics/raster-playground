import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .sidebar {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;
  }
  .input-text {
    background-color: ${({ theme }) => theme.background};
  }
  `;
