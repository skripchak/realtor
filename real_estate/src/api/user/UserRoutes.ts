import express from 'express';
import UserController from "./UserController.js";
import extractJwt from "../../auth/middleware/ExtractJwt.js";

const router = express.Router();

router.get('/users', UserController.getAllUser);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', extractJwt, UserController.updateUser);
router.delete('/users/:id', extractJwt, UserController.deleteUser);

export default router;
