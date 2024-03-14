import styled from 'styled-components'

type AsideHistoryStyles = {
  $toggle: boolean
}

export const MainContainer = styled.div<AsideHistoryStyles>`
  & > div {
    position: absolute;
    right: ${({$toggle}) => $toggle ? '0' : '-200%'};
    top: 0;
    transition: right 0.5s;
    z-index: 4;
  }
  z-index: 4;
`