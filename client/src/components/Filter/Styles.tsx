import styled from 'styled-components'

type Props = {
  $show: boolean
}

export const StyledFilter = styled.div<Props>`
  position: absolute;
  display: ${props => props.$show ? 'flex' : 'none'};
  height: 100%;
  width: 100%;
  background-color: #070707a7;

  z-index: 2;
`