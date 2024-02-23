import styled from 'styled-components'

export const AudioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--px-1);
  border-radius: var(--px-3);

  &:hover {
    background-color: var(--color-widget-hover)
  }
`

export const AudioNameContainer = styled.div`
  display: flex;
  gap: var(--px-1);
`