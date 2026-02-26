import Post from "../../DB/models/post.model.js";

export const createPost = async (req, res, next) => {
    const { title, content, userId } = req.body;

    if (!title || !content || !userId)
      return res.status(400).json({ message: 'Missing fields' });

    const post = new Post({ title, content, userId });
    await post.save();

    res.status(201).json(post);

}

export const deletePost = async (req, res, next) => {
    const post = await Post.findByPk(req.params.postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (post.userId !== req.body.userId)
      return res.status(403).json({ message: 'Not authorized' });

    await post.destroy();
    res.json({ message: 'Post deleted successfully' });
}

export const getPostDetails = async (req, res, next) => {
    const posts = await Post.findAll({
      attributes: ['id', 'title'],
      include: [
        { model: User, attributes: ['id', 'name'] },
        { model: Comment, attributes: ['id', 'content'] }
      ]
    });
    res.json(posts);
}

export const commentCount =  async (req, res, next) => {
    const posts = await Post.findAll({
      attributes: [
        'id', 
        'title',
        [Sequelize.fn('COUNT', Sequelize.col('Comments.id')), 'commentCount']
      ],
      include: [{ model: Comment, attributes: [] }],
      group: ['Post.id']
    });
    res.json(posts);
}