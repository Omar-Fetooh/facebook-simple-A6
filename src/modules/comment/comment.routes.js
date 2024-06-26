import express from "express"
import { addComment, deleteCommentById, getCommentById, updateCommentById } from "./comment.controller.js";

const commentRouter = express.Router();

commentRouter.route("/").post(addComment)

commentRouter.route("/:commentId")
    .get(getCommentById)
    .put(updateCommentById)
    .delete(deleteCommentById)




export default commentRouter;