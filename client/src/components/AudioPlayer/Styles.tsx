import styled from 'styled-components' 

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--px-2);
`

export const PlayerIcon = styled.div`
  .bi {
    font-size: var(--px-3);
    cursor: pointer;
  } 
`

export const PlayerTrack= styled.input`
  width: 100px;
  height: var(--px-1);

  cursor: pointer;
`
