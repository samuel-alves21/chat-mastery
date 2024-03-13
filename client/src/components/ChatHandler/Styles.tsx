import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  min-height: 100vh;

  gap: var(--px-6);
  padding: var(--px-4);
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: var(--px-3);
`
