import styled from "styled-components"

import { ChatButtonStyles } from "."

export const Button = styled.button<ChatButtonStyles>`
  padding: 20px 20px;
  width: 300px;

  opacity: ${({$chatState, $isStarted}) => $isStarted && $chatState !== 'ready' ? 0.5 : 1};
  cursor: ${({$chatState, $isStarted}) => $isStarted && $chatState !== 'ready' ? 'not-allowed' : 'pointer'};


  &:hover {
    opacity: ${({$chatState, $isStarted}) => $isStarted && $chatState !== 'ready' ? 0.5 : 0.8};
    cursor: ${({$chatState, $isStarted}) => $isStarted && $chatState !== 'ready' ? 'not-allowed' : 'pointer'};
  }
`