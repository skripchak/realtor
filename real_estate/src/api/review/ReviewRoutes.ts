import express from 'express';
import ReviewController from './ReviewController.js';
import extractJwt from "../../auth/middleware/ExtractJwt.js";

const router = express.Router();

router.get('/reviews', ReviewController.getAllReviews);
router.get('/reviews/:id', ReviewController.getReviewById);
router.post('/reviews', extractJwt, ReviewController.createReview);
router.put('/reviews/:id', extractJwt, ReviewController.updateReview);
router.delete('/reviews/:id', extractJwt, ReviewController.deleteReview);

export default router;
