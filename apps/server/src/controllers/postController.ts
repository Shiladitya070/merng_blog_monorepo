import { Request, Response } from "express";
import UserModel from "../models/userModel";
import { PostModel } from "../models/postModel";

export const createPost = async (req: Request, res: Response) => {
    const { title, body } = req.body;
    const { userId } = req.headers;
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    const Post = new PostModel({
        title,
        body
    })
    Post.user.push(user._id);
    const savedPost = await Post.save();
    return res.status(201).json(savedPost);
}

export const getAllPostByUser = async (req: Request, res: Response) => {
    const { userId } = req.headers;
    const posts = await PostModel.find({ user: userId });
    if (posts.length <= 0) {
        return res.status(404).json({ message: "No posts found" })
    }
    return res.status(200).json(posts);
}

export const getPostById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await PostModel.findById(id).populate("user")
    return res.status(200).json(post);
}

export const deletePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId } = req.headers;
    const post = await PostModel.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (userId !== post.user.toString()) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const deletedPost = await PostModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "Post deleted", deletedPost });
}

export const updatePost = async (req: Request, res: Response) => {
    const { title, body } = req.body;
    if (!body && !title) return res.status(400).json({ message: "Nothing to update" });
    const { id: postId } = req.params;
    const post = await PostModel.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (title) post.title = title;
    if (body) post.body = body;
    const updatedPost = await post.save();
    return res.status(200).json({ message: "Post updated", updatedPost });
}