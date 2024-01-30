import { StylesConfig } from "react-select"

type OptionType = {
  value: string
  label: string
}

export const selectStyles: StylesConfig<OptionType, false> = {
  option: (styles, { isFocused }) => ({
    ...styles,
    padding: "15px",
    backgroundColor: isFocused ? "#1F1F1F" : styles.backgroundColor,
    color: isFocused ? "#fff" : "#000",
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: "#ECBFC0",
    padding: "0.3em 0 0.3em 0.5em",
    fontSize: "1.2rem",
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#141414",
    fontWeight: "600",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    backgroundColor: "#ECBFC0",
    borderRadius: "2px",
    color: "white",
    ":hover": {
      backgroundColor: "#ECBFC0",
      color: "white",
    },
  }),
}
