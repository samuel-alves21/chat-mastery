import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: var(--px-3);

  padding: var(--px-2) var(--px-3); 
  background-color: var(--color-widget-secundary);
`

export const AudioContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--px-1);
  
  background-color: var(--color-widget-hover);
  padding: var(--px-1) var(--px-2);
  border-radius: var(--px-3);
`