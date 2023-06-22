import express from 'express';
import PremissesTypeController from './PremissesTypeController.js';
import extractJwt from "../../auth/middleware/ExtractJwt.js";

const router = express.Router();

router.get('/premisses-types', PremissesTypeController.getAllPremissesTypes);
router.get('/premisses-types/:id', PremissesTypeController.getPremissesTypeById);
router.post('/premisses-types', extractJwt, PremissesTypeController.createPremissesType);
router.put('/premisses-types/:id', extractJwt, PremissesTypeController.updatePremissesType);
router.delete('/premisses-types/:id', extractJwt, PremissesTypeController.deletePremissesType);

export default router;
