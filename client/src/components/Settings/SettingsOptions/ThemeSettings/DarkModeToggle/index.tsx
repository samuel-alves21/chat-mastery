import { useContext, useState } from "react"

import { Circle, ToggleWrapper } from "./Styles"

import { DarkModeContext, DarkModeContextType } from "../../../../../contexts/DarkModeContext"

export function DarkModeToggle() {
  const { darkMode, setDarkmode } = useContext(DarkModeContext) as DarkModeContextType 
  
  const [toggle, setToggle] = useState(darkMode)

  const handleToggle = () => {
    setToggle(!toggle)
    setDarkmode(!darkMode)
  }

  return (
    <ToggleWrapper $toggle={toggle} onClick={handleToggle}>
      <Circle $toggle={toggle} />
    </ToggleWrapper>
  )
}

