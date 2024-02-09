import styled from "styled-components"

import { StylesProps } from "."

export const Button = styled.button<StylesProps>`
  opacity: ${props => props.$chatState === 'start' || props.$chatState === 'recording' ? 1 : 0.8};
  cursor: ${props => props.$chatState === 'start' || props.$chatState === 'recording' ? 'pointer' : 'not-allowed'};
`