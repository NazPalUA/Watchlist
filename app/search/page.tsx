import SearchResultsPage from "@/src/views/SearchResultsPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Search",
}

export default function Search() {
  return <SearchResultsPage />
}
