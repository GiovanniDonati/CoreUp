import z from "zod";

const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(8),
  createdAt: z.date(),
})

export type User = z.infer<typeof UserSchema>