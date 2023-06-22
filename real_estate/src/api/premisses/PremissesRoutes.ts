import express from 'express';
import PremissesController from './PremissesController.js';
import extractJwt from "../../auth/middleware/ExtractJwt.js";

const router = express.Router();

router.get('/premisses', PremissesController.getAllPremisses);
router.get('/premisses/:id', PremissesController.getPremissesById);
router.post('/premisses', extractJwt, PremissesController.createPremisses);
router.put('/premisses/:id', extractJwt, PremissesController.updatePremisses);
router.delete('/premisses/:id', extractJwt, PremissesController.deletePremisses);

export default router;
