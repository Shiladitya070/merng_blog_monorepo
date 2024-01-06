import jwt from "jsonwebtoken";

import { SECRET } from "../config";
import { userType } from "@blog_mern/common";

export const getToken = (user: Partial<userType>): string => {
    const usertoken = jwt.sign(user, SECRET, { expiresIn: "3D" });
    return usertoken;
}