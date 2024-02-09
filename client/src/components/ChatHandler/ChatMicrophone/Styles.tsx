import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: var(--px-10);
  height: var(--px-10);

  border-radius: var(--per-5);

  .bi-mic-fill {
    font-size: var(--px-6);
    color: var(--color-primary);
  }
`