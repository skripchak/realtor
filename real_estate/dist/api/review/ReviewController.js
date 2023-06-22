import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
class ReviewController {
    static async getAllReviews(req, res) {
        try {
            const reviews = await prisma.review.findMany();
            res.json(reviews);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch reviews' });
        }
    }
    static async getReviewById(req, res) {
        const { id } = req.params;
        try {
            const review = await prisma.review.findUnique({ where: { review_id: Number(id) } });
            if (review) {
                res.json(review);
            }
            else {
                res.status(404).json({ error: 'Review not found' });
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch review' });
        }
    }
    // TODO: FIX THAT AND UPDATE METHODS! It's don't wont to get 'advantages'
    static async createReview(req, res) {
        const { realtor_id, father_id, user_id, advantages, disadvantages, body, rate } = req.body;
        try {
            const review = await prisma.review.create({
                data: {
                    realtor_id,
                    father_id,
                    user_id,
                    disadvantages,
                    body,
                    rate,
                },
            });
            res.status(201).json(review);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to create review' });
        }
    }
    static async updateReview(req, res) {
        const { id } = req.params;
        const { realtor_id, father_id, user_id, advantages, disadvantages, body, rate } = req.body;
        try {
            const updatedReview = await prisma.review.update({
                where: { review_id: Number(id) },
                data: {
                    realtor_id,
                    father_id,
                    user_id,
                    disadvantages,
                    body,
                    rate,
                },
            });
            res.json(updatedReview);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to update review' });
        }
    }
    static async deleteReview(req, res) {
        const { id } = req.params;
        try {
            await prisma.review.delete({ where: { review_id: Number(id) } });
            res.sendStatus(204);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete review' });
        }
    }
}
export default ReviewController;
//# sourceMappingURL=ReviewController.js.map