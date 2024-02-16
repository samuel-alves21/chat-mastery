import styled from "styled-components"
import { ChatMicrophoneStyles } from "."

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  gap: var(--px-2);

  p {
    font-size: var(--px-3);
  }
`

export const MicContainer = styled.div<ChatMicrophoneStyles>`
  opacity: ${({$chatState, $isStarted}) => !$isStarted || ($chatState === 'procesing' || $chatState === 'speaking') ? 0.5 : 1};
  cursor: ${({$chatState, $isStarted}) => !$isStarted || ($chatState === 'procesing' || $chatState === 'speaking') ? 'not-allowed' : 'pointer'};

  &:hover {
    opacity: ${({$chatState, $isStarted}) => !$isStarted || ($chatState === 'procesing' || $chatState === 'speaking') ? 0.5 : 0.8};
    cursor: ${({$chatState, $isStarted}) => !$isStarted || ($chatState === 'procesing' || $chatState === 'speaking') ? 'not-allowed' : 'pointer'};
  }

  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: 200px;

  width: 150px;
  height: 150px;
  border-radius: var(--per-5);

  background-color: var(--color-secundary);

  cursor: pointer;

  .bi-mic-fill {
    font-size: var(--px-8);
    color: var(--color-primary);
  }
`