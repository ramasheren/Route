import express from 'express';
import { commentCount, createPost, deletePost, getPostDetails } from './post.service.js';

const postRouter = express.Router();

postRouter.post('/', createPost);

postRouter.delete('/:postId', deletePost);

postRouter.get('/details', getPostDetails);

postRouter.get('/comment-count', commentCount);


export default postRouter;
