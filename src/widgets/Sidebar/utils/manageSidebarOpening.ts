import { useEffect } from "react"
import { useSidebarContext } from "../../../entities/sidebar/SidebarContext"
import useManageSidebarBasedOnWindowSize from "../hooks/useManageSidebarBasedOnWindowSize"

export default function manageSidebarOpening() {
  const { isPhone, isLaptop } = useManageSidebarBasedOnWindowSize()
  const { closeSidebar, openSidebar } = useSidebarContext()

  useEffect(() => {
    if (isPhone) closeSidebar()
    else if (!(!isPhone && !isLaptop)) openSidebar()
  }, [isPhone, isLaptop])
}