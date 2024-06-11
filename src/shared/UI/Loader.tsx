import { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"

type LoaderProps = { timeDelay?: number }

export default function Loader({ timeDelay = 0 }: LoaderProps) {
  const isTimeDelay = Boolean(timeDelay)
  const [showLoader, setShowLoader] = useState(!isTimeDelay)

  useEffect(() => {
    let timer: number | undefined
    if (isTimeDelay) {
      timer = window.setTimeout(() => setShowLoader(true), timeDelay)
    }
    return () => {
      if (timer) {
        window.clearTimeout(timer)
      }
    }
  }, [timeDelay, isTimeDelay])

  return showLoader ? (
    <ThreeDots
      height="60"
      width="60"
      color="#E1E1E1"
      radius="5"
      ariaLabel="three-dots-loading"
    />
  ) : null
}
