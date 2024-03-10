import { z } from "zod"

export const logInSchema = z.object({
  email: z.string().email("Must be a valid email address"),
  password: z.string(),
})

export type TLogInSchema = z.infer<typeof logInSchema>
