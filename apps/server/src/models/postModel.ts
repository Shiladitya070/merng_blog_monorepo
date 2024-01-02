import { Schema, model } from 'mongoose'

const postSchema = new Schema({
    title: String,
    body: String,
    createAt: String,
    user: [{ type: Schema.Types.ObjectId, ref: "User" }]
})

export const PostModel = model("Posts", postSchema)