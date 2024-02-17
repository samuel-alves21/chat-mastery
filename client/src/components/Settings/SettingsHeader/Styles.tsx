import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .bi-x {
    cursor: pointer;
    font-size: var(--px-5);

    &:hover {
      transform: scale(1.1);
    }
  }
`