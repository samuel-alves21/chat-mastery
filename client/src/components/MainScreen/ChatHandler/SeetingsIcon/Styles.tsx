import styled from 'styled-components'

type SettingsIconStyles = {
  $onScreen: boolean
  $wasClicked: boolean
}

const animationTime = '0.5s'

export const MainContainer = styled.div<SettingsIconStyles>`
  .bi-gear-fill {
    font-size: var(--px-4);
    cursor: pointer;
    
    &:hover {
      color: var(--color-primary);
    }
  }
  
  ${({ $onScreen, $wasClicked }) => $wasClicked && ($onScreen ? `animation: rotate-in ${animationTime} ease-in-out` : `animation: rotate-out ${animationTime} ease-in-out`)};
  
  @keyframes rotate-in {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(90deg);
    }
  }

  @keyframes rotate-out {
    0% {
      transform: rotate(90deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`