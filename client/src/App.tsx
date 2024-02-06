// import { useEffect, useState } from "react"

import { GlobalStyles } from "./styles"
import { ChatButton } from "./components/ChatButton"

function App() {
  // const [audio, setAudio] = useState('')

  // // useEffect(() => {
  // //   let chunkArray: Array<Blob> = []

  // //   let timeout: number

  // //   navigator.mediaDevices.getUserMedia({
  // //     audio: true,
  // //   })
  // //   .then((stream) => {

  // //     const recorder = new MediaRecorder(stream)

  // //     recorder.start()

  // //     recorder.ondataavailable = (e) => {
  // //       chunkArray.push(e.data)
  // //     }

  // //     recorder.onstop = async () => {
  // //       const audioBlob = new Blob(chunkArray, { type: 'audio/mpeg' })
  // //       console.log(audioBlob)

  // //       chunkArray = []

  // //       try {
  // //         const response = await fetch('http://localhost:8000/conversation', {
  // //           method: 'POST',
  // //           body: audioBlob,
  // //           headers: {
  // //             'Content-Type': 'audio/mpeg'
  // //           }
  // //         })
  
  // //         response.arrayBuffer().then((arrayBuffer: ArrayBuffer) => {
  // //           const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });

  // //           const audioUrl = URL.createObjectURL(blob);

  // //           const audioObj = new Audio(audioUrl)
  // //           audioObj.play()
  // //         })
  
  // //         const audioUrl = window.URL.createObjectURL(audioBlob)
  // //         setAudio(audioUrl)
  
  // //       } catch (error) {
  // //         console.log(error)
  // //       }

  // //     }

  // //     timeout = setTimeout(() => {
  // //       recorder.stop()
  // //     }, 3000)
  // //   })
  // //   .catch((err) => console.log(err))

  // //   return () => {
  // //     clearTimeout(timeout)
  // //   }
  // // }, [])


  return (
    <>
    <GlobalStyles />
    <section>
      <ChatButton />
    </section>
    </>
  )
}

export default App
