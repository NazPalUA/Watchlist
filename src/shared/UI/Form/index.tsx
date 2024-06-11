import { Field, FieldProps } from "./Field"
import { Form, FormProps } from "./Form"
import { SubmitButton, SubmitButtonProps } from "./SubmitButton"

// Define the type for the compound component
type CompoundForm<T> = React.FC<FormProps<T>> & {
  Field: React.FC<FieldProps>
  SubmitButton: React.FC<SubmitButtonProps>
}

// Extend the Form component with the sub-components
const getForm = <T,>() => {
  const FormComponent = Form as CompoundForm<T>
  FormComponent.Field = Field
  FormComponent.SubmitButton = SubmitButton
  return FormComponent
}

export { getForm }
