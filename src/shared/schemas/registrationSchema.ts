import { z } from "zod";

export const RegistrationSchema = z.object({
    firstName: z.string()
        .min(2)
        .max(50),
    lastName: z.string()
        .min(2)
        .max(50),
    email: z.email(),
})
