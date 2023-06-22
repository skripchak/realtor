import express, { Request, Response, NextFunction } from 'express';
import MediaController from './MediaController.js';
import extractJwt from "../../auth/middleware/ExtractJwt.js";
import path from 'path';
import multer from 'multer';
import config from "../../config/config.js";

const uploads = multer({ dest: 'storage' });


const router = express.Router();

router.use('/media/storage', express.static(path.join(config.server.main_path, 'storage')));
router.get('/media/storage/:filename', extractJwt, MediaController.getMediaFile);
router.get('/media/premisses/:id', MediaController.getAllMediaByPremissesId);
router.get('/media/realtor/:id', MediaController.getAllMediaByRealtorId);
router.get('/media/user/:id', MediaController.getAllMediaByUserId);
router.post('/media', extractJwt, uploads.single('file'), MediaController.createMedia);
router.delete('/media/:id', extractJwt, MediaController.deleteMedia);

export default router;
