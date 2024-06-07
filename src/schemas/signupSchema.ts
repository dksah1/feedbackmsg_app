import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must be atleast 2 characters")
  .max(20, "username must be no more than 20 character")
  .regex(
    /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/,
    "Username must not contain special charcter"
  );

export const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "invalid email adddress" }),
  password: z
    .string()
    .min(6, { message: "password must be atleast 6 character" }),
});
