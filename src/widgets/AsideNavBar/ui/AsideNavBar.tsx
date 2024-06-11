import { CollapsedNavBar } from "./CollapsedNavBar/CollapsedNavBar"
import { ExpandedNavBar } from "./ExpandedNavBar"

type AsideNavBarProps = {
  type?: "expanded" | "collapsed"
}

export function AsideNavBar({ type = "expanded" }: AsideNavBarProps) {
  return type === "expanded" ? <ExpandedNavBar /> : <CollapsedNavBar />
}
