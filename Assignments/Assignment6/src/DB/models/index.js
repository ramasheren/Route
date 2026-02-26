import userModel from "./user.model.js";
import postModel from "./post.model.js";
import commentModel from "./comment.model.js";

userModel.hasMany(postModel);
postModel.belongsTo(userModel, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

userModel.hasMany(commentModel);
commentModel.belongsTo(userModel, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

postModel.hasMany(commentModel);
commentModel.belongsTo(postModel, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

export {userModel, postModel, commentModel};