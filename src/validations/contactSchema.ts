import { z } from "zod";

export const contactSchema = z.object({
  email_from: z
    .string()
    .email({ message: "Invalid email address please use @gmail.com" })
    .refine((email) => email.endsWith("@gmail.com"), {
      message: "Only @gmail.com email addresses are allowed",
    }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(300, { message: "Message must be less than 300 characters" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters" })
    .max(100, { message: "Message must be less than 100 characters" }),
});
