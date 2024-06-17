"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"

import { Button } from "../../../../shared/ui/Button"
import "./SearchBox.scss"

type SearchBoxPropTypes = {
  className?: string
}

export function SearchBox({ className }: SearchBoxPropTypes) {
  const searchParams = useSearchParams()
  const searchTextFilter = searchParams?.get("text") || ""
  const router = useRouter()
  const pathname = usePathname()
  const [inputText, setInputText] = useState(searchTextFilter)

  // Handler for input change in search field
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const searchText = event.target.value
    setInputText(searchText)
    if (pathname === "/search" && searchParams) {
      const newParams = new URLSearchParams(searchParams)
      searchText ? newParams.set("text", searchText) : newParams.delete("text")
      const newUrl = `${pathname}?${newParams.toString()}`
      router.replace(newUrl)
    }
  }

  function handleClick() {
    if (pathname === "/") {
      router.push(`/search?text=${inputText}`)
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault() // Prevent form submission
      handleClick()
    }
  }

  return (
    <div className={`search-box ${className}`}>
      <input
        className="search-box__input"
        type="text"
        name="search"
        id="search-box__input"
        placeholder="Search for movies by title"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputText}
      />
      <Button onClick={handleClick}>search</Button>
    </div>
  )
}
