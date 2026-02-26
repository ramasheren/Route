import express from 'express';
import { byEmail, createOrUpdate, retrieve, signup } from './user.service.js';

const userRouter = express.Router();

userRouter.post('/signup', signup);

userRouter.put('/:id', createOrUpdate);

userRouter.get('/by-email', byEmail);

userRouter.get('/:id', retrieve);

export default userRouter;
