import express from 'express';
import user from '../models/user-schema.js';
import UserController from '../controllers/user-controller.js';

const router = express.Router();

router.get('/users', UserController.getAllUsers);

router.get('/users/:id', UserController.getUserById);

router.post('/register', UserController.createUser);

router.put('/users/:id', UserController.updateUser);

router.delete('/users/:id', UserController.deleteUser);

export default router;