import styled from "styled-components";
import { StyledProps } from ".";

export const Button = styled.button<StyledProps>`
  opacity: ${props => props.$chatState === 'start' || props.$chatState === 'recording' ? 1 : 0.8};
  cursor: ${props => props.$chatState === 'start' || props.$chatState === 'recording' ? 'pointer' : 'not-allowed'};
`