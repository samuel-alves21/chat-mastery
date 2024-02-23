import styled from "styled-components";

type SettingsLineProps = {
  width: string
}

export const SettingsLine = styled.div<SettingsLineProps>`
  width: ${({ width }) => width};
  height: 0.5px;
  margin: var(--px-3) 0;
  background-color: var(--color-line);
`