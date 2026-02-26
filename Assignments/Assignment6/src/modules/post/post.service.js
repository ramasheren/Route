import { Sequelize } from "sequelize";
import commentModel from "../../DB/models/comment.model.js";
import postModel from "../../DB/models/post.model.js";
import userModel from "../../DB/models/user.model.js";

export const newPost = async (req, res, next) => {
    const { title, content, UserId } = req.body;
    const post = await new postModel({ title, content, UserId });
    post.save();
    res.status(201).json({ msg: "post created" });
};

export const deletePost = async (req, res, next) => {
    const { postId } = req.params;
    const { userId } = req.body;
    const post = await postModel.findByPk(postId);
    if (!post) {
        return res.status(404).json({ msg: "post not found" });
    }
    if (userId != post.UserId) {
        return res
            .status(403)
            .json({ msg: "you are not authorized to delete this post" });
    }
    post.destroy();
    res.status(200).json({ msg: "post deleted" });
};

export const postNdetails = async (req, res, next) => {
    const posts = await postModel.findAll({
        include: [{ model: userModel }, { model: commentModel }],
    });
    res.status(200).json(posts);
};

export const commentCount = async (req, res, next) => {
    const posts = await postModel.findAll({
        attributes: [
            "id",
            "title",
            "content",
            [
                Sequelize.fn("COUNT", Sequelize.col("comments.id")),
                "commentCount",
            ],
        ],
        include: [{ model: commentModel, attributes: [] }],
        group: ["Post.id"]
    });
    res.status(200).json(posts);
};
