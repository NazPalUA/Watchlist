"use client"

import { usePathname, useRouter } from "next/navigation"
import { useSessionQuery } from "../../entities/session"

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const pathname = usePathname()
  const router = useRouter()
  const { data: user } = useSessionQuery()

  if (!user) {
    const redirectPath = pathname ? encodeURIComponent(pathname) : "/"
    // Redirect to the /login page, preserving the current path
    router.replace(`/login?from=${redirectPath}`)
    return null // Render nothing while redirecting
  }

  return children
}
