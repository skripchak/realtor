import express from 'express';
import RealtorController from './RealtorController.js';
import extractJWT from "../../auth/middleware/ExtractJwt.js";
const router = express.Router();
// realtors
router.get('/realtors/:id', RealtorController.getRealtorById);
router.get('/realtors', RealtorController.getAllRealtors);
router.post('/realtors', RealtorController.createRealtor);
router.put('/realtors/:id', extractJWT, RealtorController.updateRealtor);
router.delete('/realtors/:id', extractJWT, RealtorController.deleteRealtor);
export default router;
//# sourceMappingURL=RealtorRoutes.js.map