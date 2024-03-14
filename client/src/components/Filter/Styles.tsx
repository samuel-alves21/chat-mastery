import styled from 'styled-components'

type Props = {
  $show: boolean
}

export const StyledFilter = styled.div<Props>`
  position: absolute;
  display: flex;
  opacity: ${props => props.$show ? '1' : '0'};
  pointer-events: ${props => props.$show ? 'all' : 'none'};
  transition: opacity 0.2s;
  height: 100%;
  width: 100%;
  background-color: #070707a7;

  z-index: 2;
`