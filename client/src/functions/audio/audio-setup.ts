export const audioSetup = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    })
    return stream
  } catch (error) {
    console.log(error)
  }
}


