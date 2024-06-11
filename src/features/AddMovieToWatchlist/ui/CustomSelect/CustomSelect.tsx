import Select from "react-select"
import { selectStyles } from "./selectStyles"

type SelectProps = { value: any; options: any; onChange: any }

export default function CustomSelect({
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <Select
      // defaultValue={options[0]}
      value={value}
      options={options}
      onChange={onChange}
      styles={selectStyles}
      isSearchable={false}
    />
  )
}
