import { Request, Response } from "express-serve-static-core";
import prisma from "../client";

// POST /users Register a user
export async function createUser(req: Request, res: Response) {
  try {
    const user = await prisma.user.create({
      data: req.body
    })

    res.status(201).json({
      message: "User Successfully Created",
      data: user
    })
  } catch (error) {
    console.error("Server error registering a user")
    res.status(500).json({
      message: "Server error"
    })
  }
}

// GET /users Get all Users
export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany()
    res.json({
      message: "Users Successfully fetched",
      data: users
    })
  } catch (error) {
    console.error("Server error fetching users")
    res.status(500).json({
      message: "Server error"
    })
  }
}

// GET /users/:id Get user by id
export async function getUserById(req: Request<{ id: string }>, res: Response) {
  try {
    const { id: userId } = req.params
    const user = await prisma.user.findFirst({
      where: {
        id: userId
      }
    })
    res.json({
      message: "User Successfully fetched",
      data: user
    })
  } catch (error) {
    console.error("Server error fetching user")
    res.status(500).json({
      message: "Server error"
    })
  }
}

// DELETE /users/:id Delete user by id
export async function deleteUser(req: Request<{ id: string }>, res: Response) {
  try {
    const { id } = req.params
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })

    if (!user) {
      res.status(401).json({
        message: "User not found"
      })
      return
    }

    await prisma.user.delete({
      where: {
        id
      }
    })

    res.json({
      message: "User Successfully deleted"
    })
  } catch (error) {
    console.error("Server error deleting user")
    res.status(500).json({
      message: "Server error"
    })
  }
}

// PUT /users/:id 
export async function updateUser(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params
  try {
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })

    if (!user) {
      res.status(401).json({
        message: "User not found"
      })
      return
    }

    const updatedUser = await prisma.user.update({
      where: {
        id
      },
      data: req.body
    })

    res.json({
      message: "User Successfully updated",
      data: updatedUser
    })
  } catch (error) {
    console.error("Server error updating user")
    res.status(500).json({
      message: "Server error"
    })
  }
}