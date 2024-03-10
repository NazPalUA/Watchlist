import Field, { FieldProps } from "./Field"
import Form, { FormProps } from "./Form"
import SubmitButton, { SubmitButtonProps } from "./SubmitButton"

// Define the type for the compound component
type CompoundForm = React.FC<FormProps> & {
  Field: React.FC<FieldProps>
  SubmitButton: React.FC<SubmitButtonProps>
}

// Extend the Menu component with the sub-components
const ExtendedForm = Form as CompoundForm
ExtendedForm.Field = Field
ExtendedForm.SubmitButton = SubmitButton

export default ExtendedForm
