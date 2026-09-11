
import { z } from "zod";

export const appointmentSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .min(1, "Email address is required.")
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .min(1, "Phone number is required.")
    .regex(
      /^\+1\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      "Please enter a valid US phone number with +1.",
    ),

  service: z.string().min(1, "Please select a service."),

  date: z.date({
    error: "Please select your preferred date.",
  }),

  time: z.string().min(1, "Please select your preferred time."),

  message: z
    .string()
    .min(1, "Please tell us how we can help.")
    .max(1000, "Message is too long."),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

