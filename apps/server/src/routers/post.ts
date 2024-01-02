import { Router } from "express";
import { UpdatePostValidation, auth, createPostValidation } from "../middleware/middleware";
import { createPost, deletePost, getAllPostByUser, getPostById, updatePost } from "../controllers/postController";

const postRouter = Router();

postRouter
    .get('/:id', auth, getPostById)
    .get('/', auth, getAllPostByUser)
    .delete('/:id', auth, deletePost)
    .patch('/:id', auth, UpdatePostValidation, updatePost)
    .post('/', auth, createPostValidation, createPost);

export default postRouter;

