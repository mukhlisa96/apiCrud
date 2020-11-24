import express from 'express';
import { getPosts, createPost, deletePost, getPostById, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);

router.post('/', createPost);

router.get('/:id', getPostById);

router.delete('/:id', deletePost);

router.patch('/:id', updatePost);

export default router;