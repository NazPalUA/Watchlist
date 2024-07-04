import SearchResultsPage from "@/src/pages/SearchResultsPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Search",
}

export default function Search() {
  return <SearchResultsPage />
}
