import { createPortal } from "react-dom"
import { useModalContext } from "../context/ModalContext"
import AddToWatchlistModal from "./AddToWatchlistModal/AddToWatchlistModal"

export default function Overlays() {
  const { isModalActive } = useModalContext()

  const mountElement = document.getElementById("overlays")

  return createPortal(isModalActive && <AddToWatchlistModal />, mountElement!)
}
