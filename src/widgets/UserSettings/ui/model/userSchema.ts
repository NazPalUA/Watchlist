import { z } from "zod"

export const userSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name can't exceed 20 characters"),
})

export type TUserSchema = z.infer<typeof userSchema>
