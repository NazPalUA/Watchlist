import { useSidebarContext } from "../../../shared/context/SidebarContext"
import useWindowSize from "../../../shared/hooks/useWindowSize"

export default function useManageSidebarBasedOnWindowSize() {
  const { toggleSidebar, closeSidebar } = useSidebarContext()
  const size = useWindowSize()

  // Check if the device is a phone
  const isPhone = size.width && size.width < 768

  // Check if the device is a laptop
  const isLaptop = size.width && size.width > 1025

  function toggleSidebarIfMobile() {
    isPhone ? toggleSidebar() : null
  }

  function closeSidebarIfMobile() {
    isPhone ? closeSidebar() : null
  }

  // Return a function that toggles the sidebar if on a phone
  return { isPhone, isLaptop, toggleSidebarIfMobile, closeSidebarIfMobile }
}
