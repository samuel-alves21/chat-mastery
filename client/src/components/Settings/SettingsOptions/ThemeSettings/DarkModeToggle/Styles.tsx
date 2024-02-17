import styled from 'styled-components'

type ToggleProps = {
  $toggle: boolean
}

const baseSize = 25

export const ToggleWrapper = styled.div<ToggleProps>`
  width: ${baseSize * 2}px;
  height: ${baseSize}px;
  padding: 0 3px;
  border-radius: 50px;
  border: ${({ $toggle }) => $toggle ? 'none' : '1px solid var(--color-text)'};
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ $toggle }) => $toggle ? 'var(--color-primary)' : 'transparent'};
  transition: background-color 0.3s ease-in-out;
`

export const Circle = styled.div<ToggleProps>`
  height: ${baseSize - 6}px;
  width: ${baseSize - 6}px;
  border-radius: 50%;
  transform: ${({ $toggle }) => $toggle ? `translateX(${baseSize}px)` : 'translateX(0)'};
  transition: transform 0.3s ease-in-out;
  background-color: ${({ $toggle }) => $toggle ? '#fff' : 'var(--color-text)'};
` 