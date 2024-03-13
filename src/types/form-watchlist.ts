import { z } from "zod"

export const watchlistSchema = z.object({
  name: z
    .string()
    .max(50, "Name can't exceed 50 characters")
    .refine((value) => value.trim().length > 0, "Name can't be empty")
    .transform((value) => value.trim()),
  description: z
    .string()
    .max(500, "Description can't exceed 500 characters")
    .transform((value) => value.trim()),
})

export type TWatchlistSchema = z.infer<typeof watchlistSchema>
