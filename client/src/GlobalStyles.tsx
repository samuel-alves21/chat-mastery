import { createGlobalStyle } from 'styled-components'

type GlobalStylesProps = {
  $darkMode: boolean
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  :root {
    --px-1: 8px;
    --px-2: 16px;
    --px-3: 24px;
    --px-4: 32px;
    --px-5: 40px;
    --px-6: 48px;
    --px-7: 56px;
    --px-8: 64px;
    --px-9: 72px;
    --px-10: 80px;

    --per-1: 10%;
    --per-2: 20%;
    --per-3: 30%;
    --per-4: 40%;
    --per-5: 50%;
    --per-6: 60%;
    --per-7: 70%;
    --per-8: 80%;
    --per-9: 90%;
    --per-10: 100%;

    --color-primary: #2830DB;
    --color-secundary: #595fd8;

    --color-widget: ${({ $darkMode }) => $darkMode ? '#2F2F2F' : '#fff'};
    --color-widget-secundary: ${({ $darkMode }) => $darkMode ? '#111313' : '#f9f9f9'};
    --color-widget-hover: ${({ $darkMode }) => $darkMode ? '#424242' : '#ECECEC'};

    --color-text: ${({ $darkMode }) => $darkMode ? '#fff' : '#000'};
    --color-bg: ${({ $darkMode }) => $darkMode ? '#212121' : '#fff'};

    --color-line : ${({ $darkMode }) => $darkMode ? '#424242' : '#ECECEC'};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    
    font-family: 'Poppins', sans-serif;

    position: relative;

    transition: color 0.5s;
    transition: background 0.5s;
  }

  h3, h4 {
    font-weight: normal;
  }
  
  button {
    padding: var(--px-2) var(--px-8); 
    font-size: var(--px-2);
    
    cursor: pointer;
    border: none;
    color: #fff;
    background: var(--color-primary);

    &:hover {
      opacity: 0.8;
    }
  }

  p {
    font-size: var(--px-2);
  }

  input[type="range"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    height: 7px;
    background-color: var(--color-primary);
    border-radius: 5px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background-color: var(--color-secundary);
    border: none;
    border-radius: 50%;
    margin-top: -3.5px; 
  }

  input[type="range"]::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background-color: var(--color-secundary);
    border: none;
    border-radius: 50%;
    margin-top: -3.5px; 

  }

  input[type="range"]::-ms-thumb {
    width: 15px;
    height: 15px;
    background-color: var(--color-secundary);
    border: none;
    border-radius: 50%;
    margin-top: -3.5px; 
  }

  input[type="range"]::-webkit-slider-runnable-track {
    height: 7px;
    background-color: var(--color-primary);
    border-radius: 5px;
  }

  input[type="range"]::-moz-range-track {
    height: 7px;
    background-color: var(--color-primary);
    border-radius: 5px;
  }

  input[type="range"]::-ms-track {
    height: 7px;
    background-color: var(--color-primary);
    border-radius: 5px;
  }
`