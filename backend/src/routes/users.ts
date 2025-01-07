import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/users";
import { validateSchema } from "../middlewares/validations";
import { createUserSchema } from "../schemas/users";

const usersRouter = Router()

usersRouter.get('/', getAllUsers)
usersRouter.get('/:id', getUserById)
usersRouter.post('/', validateSchema(createUserSchema), createUser)
usersRouter.delete('/:id', deleteUser)
usersRouter.put('/:id', updateUser)

export default usersRouter