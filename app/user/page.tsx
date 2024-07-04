import UserPage from "@/src/pages/UserPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "User",
}

export default function User() {
  return <UserPage />
}
