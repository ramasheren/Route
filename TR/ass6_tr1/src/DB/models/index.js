import sequelize from '../connectionDB.js';
import User from './user.model.js';
import Post from './post.model.js';
import Comment from './comment.model.js';

const models = { User, Post, Comment };

User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Comment, { foreignKey: 'userId', onDelete: 'CASCADE' });
Comment.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Comment, { foreignKey: 'postId', onDelete: 'CASCADE' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

models.sequelize = sequelize;
models.Sequelize = sequelize.Sequelize;


export {User, Post, Comment};
export default models;
