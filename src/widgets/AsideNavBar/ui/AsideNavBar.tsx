import { CollapsedNavBar } from "./CollapsedNavBar/CollapsedNavBar"
import { ExpandedNavBar } from "./ExpandedNavBar/ExpandedNavBar"

export function AsideNavBar() {
  return (
    <>
      <ExpandedNavBar />
      <CollapsedNavBar />
    </>
  )
}
