"use client"
import { useLocation, useNavigate } from "react-router-dom"

export function useNavigateBack() {
  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"

  function navigateBack() {
    navigate(from, { replace: true })
  }

  return navigateBack
}
