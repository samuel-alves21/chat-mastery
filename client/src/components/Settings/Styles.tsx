import styled from "styled-components"

import { MainContainerStyledProps } from "."

export const MainContainer = styled.div<MainContainerStyledProps>`
  display: ${({$onScreen}) => $onScreen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
 
  height: 100%;
  width: 100%;
  
  background-color: #251a802d;
`

export const SettingsContainer = styled.div`
  height: 80%;
  width: max(50%, 300px);

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`