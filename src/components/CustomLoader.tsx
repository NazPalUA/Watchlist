import { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"

type CustomLoaderProps = { time?: number; timeDelay?: boolean }

export default function CustomLoader({
  time = 1000,
  timeDelay = true,
}: CustomLoaderProps) {
  const [showLoader, setShowLoader] = useState(!timeDelay)

  useEffect(() => {
    let timer: any
    if (timeDelay) {
      timer = setTimeout(() => setShowLoader(true), time)
    }
    return () => timer && clearTimeout(timer)
  }, [time, timeDelay])

  if (!showLoader) return null

  return (
    <ThreeDots
      height="60"
      width="60"
      color="#E1E1E1"
      radius="5"
      ariaLabel="three-dots-loading"
    />
  )
}
