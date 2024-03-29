import styled from "styled-components"

import { MainContainerStyledProps } from "."

const animationTime = '0.5s'

export const MainContainer = styled.div<MainContainerStyledProps>`
  display: flex;
  opacity: ${({$onScreen}) => $onScreen ? '1' : '0'};
  pointer-events: ${({$onScreen}) => $onScreen ? 'all' : 'none'};
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 4;

  transition: opacity ${({ $onScreen }) => $onScreen ? '0.8s' : '0.2s'} ease-in-out;
  
  height: 100%;
  width: 100%;

  overflow-y: hidden;
`

export const SettingsContainer = styled.div<MainContainerStyledProps>`
  display: flex;
  flex-direction: column;

  height: min(80%, 800px);
  width: min(80%, 800px);
  border-radius: var(--px-4);

  padding: var(--px-3);

  background-color: var(--color-widget);

  ${({$onScreen}) => $onScreen ? `animation: fade-in ${animationTime} ease-in-out forwards` : `animation: fade-out ${animationTime} ease-in-out forwards`};

  @keyframes fade-in {
    0% {
      transform: translateY(100vh);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes fade-out {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(100vh);
    }
  }
`