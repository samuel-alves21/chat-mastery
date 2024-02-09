import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  border-radius: var(--per-5);

  background-color: var(--color-secundary);

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  .bi-mic-fill {
    font-size: var(--px-6);
    color: var(--color-primary);
  }
`