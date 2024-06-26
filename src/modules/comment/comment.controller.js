import commentModel from '../../../database/models/comment.model.js'
import userModel from '../../../database/models/user.model.js';


export const addComment = async (req, res) => {
    const user = await userModel.findOne({ where: { id: req.body.userId, loginStatus: true } })
    const comment = await commentModel.create(req.body);
    res.status(201).json({ message: "success", comment });
}

export const getCommentById = async (req, res) => {
    const comment = await commentModel.findOne({ where: { id: req.params.commentId } })
    res.json({ message: "success", comment });

}
export const updateCommentById = async (req, res) => {
    const comment = await commentModel.update(req.body, { where: { id: req.params.commentId, userId: req.body.userId } })
    return comment > 0 ?
        res.json({ message: "Comment updated Successfully", comment })
        : res.json({ message: "not authorized" })
}
export const deleteCommentById = async (req, res) => {
    const comment = await commentModel.destroy({ where: { id: req.params.commentId, userId: req.body.userId } })
    return comment > 0 ?
        res.json({ message: "Comment Deleted Successfully", comment })
        : res.json({ message: "not authorized" })
}
