import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: var(--px-1);
  border-radius: var(--px-2);

  &:hover {
    background-color: var(--color-widget-hover)
  }
`