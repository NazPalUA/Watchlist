import { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"

type CustomLoaderProps = { timeDelay?: number }

export default function CustomLoader({ timeDelay = 0 }: CustomLoaderProps) {
  const isTimeDelay = Boolean(timeDelay)

  const [showLoader, setShowLoader] = useState(!isTimeDelay)
  console.log(showLoader)

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
