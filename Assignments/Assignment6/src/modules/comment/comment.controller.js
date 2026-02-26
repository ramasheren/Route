import { Router } from "express";
import { bulkC, details, findCreate, newest, search, updateComment } from "./comment.service.js";
const commentRouter = Router()

commentRouter.post('/', bulkC)

commentRouter.patch('/:id', updateComment)

commentRouter.post('/find-or-create', findCreate)

commentRouter.get('/search', search)

commentRouter.get('/newest/:PostId', newest)

commentRouter.get('/details/:id', details)

export default commentRouter;