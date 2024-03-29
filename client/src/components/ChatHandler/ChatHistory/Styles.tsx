import styled from 'styled-components'

export const MainContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;  
  height: 100vh;
  width: 300px;

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