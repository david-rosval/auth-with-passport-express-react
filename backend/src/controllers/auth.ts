import { Request, Response } from "express-serve-static-core";
import prisma from "../client";

export async function login(req: Request, res: Response) {
  
}

export async function register(req: Request, res: Response) {
  try {
    // Verifying if there is no user with the same email
    const existingUser = await prisma.user.findFirst({
      where: {
        email: req.body.email
      }
    })

    // New User
    if (!existingUser) {
      const newUser = await prisma.user.create({
        data: req.body
      })
      res.status(201).json({
        message: "User Successfully Registered",
        data: newUser
      })
      return
    }
    
    // User already exists
    res.status(400).json({
      message: "User already exists"
    })
    
  } catch (error) {
    console.error("Server error registering a user")
    res.status(500).json({
      message: "Server error"
    })
  }
}
