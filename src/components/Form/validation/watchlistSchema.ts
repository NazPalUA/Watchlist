import { z } from "zod"

export const watchlistSchema = z.object({
  name: z
    .string()
    .min(1, "Name can't be empty")
    .max(50, "Name can't exceed 50 characters"),
  description: z.string().max(500, "Description can't exceed 500 characters"),
})

export type TWatchlistSchema = z.infer<typeof watchlistSchema>
