import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    created_at: String,
    verified: { type: Boolean, default: false },
    avatar: String,
});

const UserModel = model("User", userSchema)

export default UserModel;