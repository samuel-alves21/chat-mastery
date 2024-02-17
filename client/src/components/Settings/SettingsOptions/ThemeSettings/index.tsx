import { DarkModeToggle } from "./DarkModeToggle"

import { MainContainer } from "./Styles"

export const ThemeSettings = () => {
  return (
    <MainContainer>
      <p>dark mode: </p>
      <DarkModeToggle />
    </MainContainer>
  )
}