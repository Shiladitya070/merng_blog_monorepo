import { Router } from "express";
import { auth, createUserValidate, loginValidate } from "../middleware/middleware";
import { createUser, getMe, loginUser } from "../controllers/userController";

const userRouter = Router();

userRouter
    .post('/login', loginValidate, loginUser)
    .post('/register', createUserValidate, createUser)
    .get('/me', auth, getMe)


export default userRouter;

