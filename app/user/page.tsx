import UserPage from "@/src/views/UserPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "User",
}

export default function User() {
  return <UserPage />
}
