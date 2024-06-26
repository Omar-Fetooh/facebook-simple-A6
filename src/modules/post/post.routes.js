import express from 'express'
import { addPost, deletePost, readPost, updatePost, getSpecificPost } from './post.controller.js';

const postRouter = express.Router();

postRouter.route("/").post(addPost)

postRouter.route("/:postId")
    .get(readPost)
    .put(updatePost)
    .delete(deletePost)

postRouter.route("/user/:userid/:postId")
    .get(getSpecificPost)

export default postRouter