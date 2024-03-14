import styled from "styled-components";
import { breakingPoints } from "../../../utils/breaking-points";

type SettingsLineProps = {
  width: string
}

export const SettingsLine = styled.div<SettingsLineProps>`
  width: ${({ width }) => width};
  height: 0.5px;
  margin: var(--px-3) 0;
  background-color: var(--color-line);

  @media (max-width: ${breakingPoints.md}) {
    margin: var(--px-2) 0;
  }
`