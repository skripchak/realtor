import express from 'express';
import LikedPremissesController from './LikedPremissesController.js';
import extractJwt from "../../auth/middleware/ExtractJwt.js";
const router = express.Router();
router.get('/likedpremisses/user/:userId', extractJwt, LikedPremissesController.getAllLikedPremissesByUserId);
router.get('/likedpremisses/premisses/:premissesId', extractJwt, LikedPremissesController.getAllLikedPremissesByPremissesId);
router.post('/likedpremisses', extractJwt, LikedPremissesController.createLikedPremisses);
router.put('/likedpremisses/:id', extractJwt, LikedPremissesController.updateLikedPremisses);
router.delete('/likedpremisses/:id', extractJwt, LikedPremissesController.deleteLikedPremisses);
export default router;
//# sourceMappingURL=LikedPremissesRoutes.js.map