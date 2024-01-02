import { Request, Response } from "express";
import UserModel from "../models/userModel";
import bcrypt from 'bcryptjs';
import { getToken } from "../helpers/tokenGenration";

export const getMe = async (req: Request, res: Response) => {
    const { userId } = req.headers;
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;
    return res.status(200).json(userWithoutPassword);
}

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password!);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const id = String(user._id);
    const token = getToken({ id });
    return res.status(200).json({ message: "Login successful", token })
}

export const createUser = async (req: Request, res: Response) => {
    const { username, password, email } = req.body;
    const user = await UserModel.findOne({ email })
    if (user) {
        return res.status(409).json({ message: "Email already exists" });
    }
    const hasedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
        username,
        password: hasedPassword,
        email,
        avatar: `https://api.dicebear.com/7.x/lorelei/svg?seed=${username}`,
        created_at: new Date().toISOString(),
    });
    const { _id } = await newUser.save();
    const token = getToken({ id: String(_id) });
    res.json({ message: "User created successfully", token });
}