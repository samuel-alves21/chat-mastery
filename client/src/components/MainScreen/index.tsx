import { ChatHandler } from "./ChatHandler"
import { Footer } from "./Footer"

import { MainContainer } from "./Styles"

export const MainScreen = () => {
  return (
    <MainContainer>
      <ChatHandler />
      <Footer />
    </MainContainer>
  )
}