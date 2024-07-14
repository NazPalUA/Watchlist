import HistoryPage from "@/src/views/HistoryPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "History",
}

export default function History() {
  return <HistoryPage />
}
