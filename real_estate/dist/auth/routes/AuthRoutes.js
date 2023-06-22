import express from 'express';
import AuthController from "../controller/AuthController.js";
const router = express.Router();
router.get('/validate', AuthController.validateToken);
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
export default router;
//# sourceMappingURL=AuthRoutes.js.map