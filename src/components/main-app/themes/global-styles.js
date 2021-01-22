import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .sidebar {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;
  }

  #upload-btn {
    background-color: ${({ theme }) => theme.altBtnBgColor};
    color: ${({ theme }) => theme.altBtnColor};
  }

  #json-pretty > pre::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.scroll};
  }

  #json-pretty > pre{
    background-color: ${({ theme }) => theme.background} !important;
    color: ${({ theme }) => theme.jsonColor} !important;
  }

  .__json-key__{
    color: ${({ theme }) => theme.jsonKey} !important;
  } 

  .__json-value__{
    color: ${({ theme }) => theme.jsonValue} !important;
  }

  .__json-string__{
    color: ${({ theme }) => theme.jsonString} !important;
  }

  .input-text {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  .fa.iconButton, #color-format, .copy-btn{
    background-color: ${({ theme }) => theme.btnBgColor};
    color: ${({ theme }) => theme.btnColor};
  }  
  
  .theme-toggle input:checked + .slider {
    background-color: ${({ theme }) => theme.btnBgColor};
  }
  `;
