import { z } from "zod";
import { RegistrationSchema } from "@/shared/schemas/registrationSchema";

export type RegistrationFormData = z.infer<typeof RegistrationSchema>
