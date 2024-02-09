import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
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
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: var(--px-2);
  }

  body {
    background-color: #161616;
  }
  
  section {
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button {
    padding: var(--px-2) var(--px-8); 
    
    cursor: pointer;
    border: none;
    color: #fff;
    background: var(--color-primary);

    &:hover {
      opacity: 0.8;
    }
  }
`