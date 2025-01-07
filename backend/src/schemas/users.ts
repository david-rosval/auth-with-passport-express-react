import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string({ required_error: "Username is required "}).max(30, { message: "Characters limit exceeded" }).min(3, { message: "Username must have at least 3 characters" }),
  email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email" }),
  password: z.string({ required_error: "Password is required" }).min(8, { message: "Password must have at least 8 characters" })
})

export const updateUserSchema = z.object({
  username: z.string({ required_error: "Username is required "}).max(30, { message: "Characters limit exceeded" }).min(3, { message: "Username must have at least 3 characters" }),
  email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email" }),
})

export const loginSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email" }),
  password: z.string({ required_error: "Password is required" }).min(8, { message: "Password must have at least 8 characters" })
})

