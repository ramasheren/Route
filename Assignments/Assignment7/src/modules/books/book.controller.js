import { Router } from "express";
import * as BS from "./book.service.js"
const bookRouter = Router()

bookRouter.post('/', BS.insertBook)
bookRouter.post('/batch', BS.insertManyBooks)
bookRouter.patch('/:title', BS.updateBook)
bookRouter.get('/title', BS.findBookTitle)
bookRouter.get('/year', BS.findBooksYear)
bookRouter.get('/genre', BS.findBooksGenre)
bookRouter.get('/skip-limit', BS.bokSkipLimit)
bookRouter.get('/year-integer', BS.yearInteger)
bookRouter.get('/exclude-genres', BS.excludeGenres)
bookRouter.delete('/before-year', BS.deleteBeforeYear)
bookRouter.get('/aggregate1', BS.agg1)
bookRouter.get('/aggregate2', BS.agg2)
bookRouter.get('/aggregate3', BS.agg3)
bookRouter.get('/aggregate4', BS.agg4)

export default bookRouter