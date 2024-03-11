import { zodResolver } from "@hookform/resolvers/zod"
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form"
import { ZodType } from "zod"
import { Form as FormUI } from "./UI/Form/Form"

export type FormProps<T> = {
  children: React.ReactNode
  schema: ZodType<T>
  onSubmit: (data: T) => Promise<void> | void
  style?: React.CSSProperties
  defaultValues?: DefaultValues<T>
}

export function Form<T extends FieldValues>({
  children,
  schema,
  onSubmit,
  style,
  defaultValues,
}: FormProps<T>) {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  })

  const { handleSubmit, reset } = methods

  const onSubmitForm = async (data: T) => {
    await onSubmit(data)
    reset()
  }

  return (
    <FormProvider {...methods}>
      <FormUI onSubmit={handleSubmit(onSubmitForm)} style={style}>
        {children}
      </FormUI>
    </FormProvider>
  )
}
