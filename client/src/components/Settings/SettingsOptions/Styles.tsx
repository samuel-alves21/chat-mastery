import styled from 'styled-components'
import { breakingPoints } from '../../../utils/breaking-points'

type OptionStyles = {
  $isSelected: boolean
}

export const MainContainer = styled.div`
  padding: var(--px-2) 0;
  
  display: flex;
  gap: var(--px-10);
  height: 70%;

  @media (max-width: ${breakingPoints.md}) {
    flex-direction: column;
  }
`

export const OptionsContainer = styled.div`
  width: 20%;
  gap: var(--px-3);
  
  @media (max-width: ${breakingPoints.md}) {
    display: flex;
  }
`

export const Option = styled.div<OptionStyles>`
  border-radius: var(--px-3);
  padding: var(--px-1)  var(--px-2);
  cursor: pointer;

  ${({ $isSelected }) => $isSelected && 'background-color: var(--color-widget-hover)'}; 
`

export const SelectedOptionContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%; 
  padding: 0 var(--px-2);
  overflow-y: auto;

  @media (max-width: ${breakingPoints.md}) {
    padding: 0;
  }
`