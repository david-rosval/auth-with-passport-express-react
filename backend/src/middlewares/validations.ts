import { NextFunction, Request, Response } from "express-serve-static-core";
import { createUserSchema } from "../schemas/users";
import { ZodSchema } from "zod";

export const validateSchema = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.body)

  if (!result.success) {
    res.status(400).json({ errors: result.error.issues.map(issue => issue.message) })
    return 
  }

  next()
}