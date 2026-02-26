import { Router } from "express"
import { commentCount, deletePost, newPost, postNdetails } from "./post.service.js";
const postRouter = Router()

postRouter.post('/', newPost)

postRouter.delete('/:postId', deletePost)

postRouter.get('/details', postNdetails)

postRouter.get('/comment-count', commentCount)

export default postRouter;