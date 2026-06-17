import { Router } from "express";
import * as CS from "./collection.service.js"
const collectionRouter = Router()

collectionRouter.post('/books', CS.createBooksCollection)
collectionRouter.post('/authors', CS.createAuthorsImplicit)
collectionRouter.post('/logs/capped', CS.createLogsCollection)
collectionRouter.post('/books/index', CS.createIndex)

export default collectionRouter