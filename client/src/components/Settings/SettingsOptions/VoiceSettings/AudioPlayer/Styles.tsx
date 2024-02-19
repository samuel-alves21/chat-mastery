import styled from 'styled-components'

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--px-2);
`

export const PlayerIcon = styled.div`
  .bi {
    font-size: var(--px-3);
  } 
`

export const PlayerTrackContainer = styled.div`
  width: 200px;
  height: var(--px-1);
  background-color: transparent;
  border-radius: var(--px-3);
  border: 1px solid var(--color-text);
`

export const PlayerTrack = styled.div`
  background-color: var(--color-primary);
`