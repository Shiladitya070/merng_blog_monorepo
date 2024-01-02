import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { SECRET } from "../config";
import { createPostInput, loginZod, updatePostInput, userZod } from "@blog_mern/common";


export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const auth = req.headers.authorization;
        if (!auth) {
            return res.status(400).json({ message: "Authorization header is required" });
        }
        const token = auth.split(" ")[1];
        if (!token) {
            return res.status(400).json({ message: "Token is required" });
        }

        jwt.verify(token, SECRET, (err, payload) => {
            if (err) {
                return res.status(403).json({ message: err.message, err });
            }
            if (!payload) {
                return res.status(403).json({ message: "Payload is required" });
            }
            if (typeof payload === "string") {
                return res.sendStatus(403).json({ message: "ERROR" });
            }
            req.headers.userId = payload.id;
        })
        return next();
    } catch (error) {
        console.log("🔴 [ERROR in checkUser]", error)
        return res.status(400).json({ message: "ERROR", error });
    }

}

export const createUserValidate = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password, confirmPassword, email } = req.body;
    try {
        await userZod.parseAsync({ username, password, confirmPassword, email, });

        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

export const loginValidate = async (req: Request, res: Response, next: NextFunction) => {

    try {
        await loginZod.parseAsync(req.body);
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

export const createPostValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await createPostInput.parseAsync(req.body);
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

export const UpdatePostValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await updatePostInput.parseAsync(req.body);
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}