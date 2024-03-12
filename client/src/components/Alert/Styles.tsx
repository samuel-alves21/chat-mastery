import styled from 'styled-components'

type MainContainerProps = {
  $display : boolean
}

export const MainContainer = styled.div<MainContainerProps>`
  display: ${({ $display }) => $display ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;

  overflow-y: hidden;
  
  background-color: #070707a7;
`

export const Widget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--px-3);
  min-width: 300px;
  max-width: 400px;
  border-radius: var(--px-4);
  padding: var(--px-3);
  background-color: var(--color-widget);
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: var(--px-1);
`
