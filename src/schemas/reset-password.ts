import { z } from "zod"

export const resetPasswordSchema = z.object({
  oldPassWord: z
    .string()
    .min(6, "Introduza uma palavra-passe de no mínimo 6 dígitos!"),
  newPassWord: z
    .string()
    .min(6, "Introduza uma palavra-passe de no mínimo 6 dígitos!"),
})

export type ResetPasswordData = z.infer<typeof resetPasswordSchema>
