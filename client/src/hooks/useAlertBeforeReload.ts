import { useEffect } from "react"

export const useAlertBeforeReload = (isStarted: boolean) => {
  useEffect(() => {
    if (isStarted) {
      const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
        event.preventDefault()
        event.returnValue = ''
        const confirmationMessage = 'You are still practising and changes may not be saved. Do you really want to leave?.'
        return confirmationMessage
      }
    
      window.addEventListener('beforeunload', beforeUnloadHandler)
    
      return () => {
        window.removeEventListener('beforeunload', beforeUnloadHandler)
      }
    }
  }, [isStarted])
}