import styled from 'styled-components'

type OptionStyles = {
  $isSelected: boolean
}

export const MainContainer = styled.div`
  padding-top: var(--px-2);

  display: flex;
  gap: var(--px-10);
`

export const OptionsContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: var(--px-3);
`

export const Option = styled.div<OptionStyles>`
  border-radius: var(--px-2);
  padding: var(--px-1)  var(--px-2);
  cursor: pointer;

  ${({ $isSelected }) => $isSelected && 'background-color: var(--color-widget-hover)'}; 
`

export const SelectedOptionContainer = styled.div`
  flex-grow: 1;
`