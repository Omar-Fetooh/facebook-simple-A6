import postModel from "../../../database/models/post.model.js"
import userModel from "../../../database/models/user.model.js";

export const addPost = async (req, res) => {
    const { title, content, userId } = req.body
    const user = await userModel.findOne({ where: { id: userId, loginStatus: true } });  // To make sure user is signed in 
    if (!user) {
        return res.json({ message: "user not found or not logged in" })
    }
    const result = await postModel.create(req.body);
    res.status(201).json({ message: "Created Successfully", result })
}

export const readPost = async (req, res) => {
    const result = await postModel.findOne({ where: { id: req.params.postId } });
    res.json({ message: 'Success', result });
}

export const updatePost = async (req, res) => {
    const { title, content, userId } = req.body;
    const result = await postModel.update({ title, content }, { where: { id: req.params.postId, userId } });
    return result > 0 ?
        res.json({ message: 'Updated Successfully', result }) :
        res.json({ message: "post not found or not authorized" })
}
export const deletePost = async (req, res) => {
    const { userId } = req.body;
    const result = await postModel.destroy({ where: { id: req.params.postId, userId } });
    return result > 0 ?
        res.json({ message: 'Deleted Successfully', result }) :
        res.json({ message: "post not found or not authorized" })
}

export const getSpecificPost = async (req, res) => {
    const post = await postModel.findAll({
        include: {
            model: userModel,
            attributes: ['userName', 'email']
        }
    });
    res.json({ message: "post fetched successfully", post })
}

// export const getSpecificPost = async (req, res) => {
//     const { userId, postId } = req.params;
//     const user = await userModel.findOne({
//         where: { id: userId },
//         include: {
//             model: postModel,
//             where: { id: postId },
//             include: {
//                 model: Comment
//             }
//         }
//     })
//     if (!user) {
//         return res.status(404).json({ error: 'User or Post not found' });
//     }

//     res.json(user);
// }