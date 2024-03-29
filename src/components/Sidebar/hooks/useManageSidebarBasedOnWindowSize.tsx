import { useSidebarContext } from "../../../context/SidebarContext"
import useWindowSize from "../../../hooks/useWindowSize"

export default function useManageSidebarBasedOnWindowSize() {
  const { toggleSidebar } = useSidebarContext()
  const size = useWindowSize()

  // Check if the device is a phone
  const isPhone = size.width && size.width < 768

  // Check if the device is a laptop
  const isLaptop = size.width && size.width > 1025

  function toggleSidebarIfMobile() {
    isPhone ? toggleSidebar() : null
  }

  // Return a function that toggles the sidebar if on a phone
  return { isPhone, isLaptop, toggleSidebarIfMobile }
}
