import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class LikedPremissesController {
    static async getAllLikedPremissesByUserId(req, res) {
        const { userId } = req.params;
        try {
            const likedPremisses = await prisma.likedpremisses.findMany({
                where: { user_id: Number(userId) },
            });
            res.json(likedPremisses);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to fetch liked premisses" });
        }
    }
    static async getAllLikedPremissesByPremissesId(req, res) {
        const { premissesId } = req.params;
        try {
            const likedPremisses = await prisma.likedpremisses.findMany({
                where: { premisses_id: Number(premissesId) },
            });
            res.json(likedPremisses);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to fetch liked premisses" });
        }
    }
    static async createLikedPremisses(req, res) {
        const { premissesId, userId, isViewed } = req.body;
        try {
            const likedPremiss = await prisma.likedpremisses.create({
                data: {
                    premisses_id: premissesId,
                    user_id: userId,
                    is_viewed: isViewed,
                },
            });
            res.status(201).json(likedPremiss);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create liked premiss" });
        }
    }
    static async updateLikedPremisses(req, res) {
        const { id } = req.params;
        const { premissesId, userId, isViewed } = req.body;
        try {
            const updatedLikedPremiss = await prisma.likedpremisses.update({
                where: { liked_premisses_id: Number(id) },
                data: {
                    premisses_id: premissesId,
                    user_id: userId,
                    is_viewed: isViewed,
                },
            });
            res.json(updatedLikedPremiss);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to update liked premiss" });
        }
    }
    static async deleteLikedPremisses(req, res) {
        const { id } = req.params;
        try {
            await prisma.likedpremisses.delete({
                where: { liked_premisses_id: Number(id) },
            });
            res.sendStatus(204);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete liked premiss" });
        }
    }
}
export default LikedPremissesController;
//# sourceMappingURL=LikedPremissesController.js.map