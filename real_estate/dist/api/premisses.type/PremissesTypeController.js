import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class PremissesTypeController {
    static async getAllPremissesTypes(req, res) {
        try {
            const premissesTypes = await prisma.premissestype.findMany();
            res.json(premissesTypes);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch premisses types' });
        }
    }
    static async getPremissesTypeById(req, res) {
        const { id } = req.params;
        try {
            const premissesType = await prisma.premissestype.findUnique({ where: { premisses_type_id: Number(id) } });
            if (premissesType) {
                res.json(premissesType);
            }
            else {
                res.status(404).json({ error: 'Premisses type not found' });
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch premisses type' });
        }
    }
    static async createPremissesType(req, res) {
        const { name, description, media_id } = req.body;
        try {
            const premissesType = await prisma.premissestype.create({
                data: {
                    name,
                    description,
                    media_id,
                },
            });
            res.status(201).json(premissesType);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to create premisses type' });
        }
    }
    static async updatePremissesType(req, res) {
        const { id } = req.params;
        const { name, description, media_id } = req.body;
        try {
            const updatedPremissesType = await prisma.premissestype.update({
                where: { premisses_type_id: Number(id) },
                data: {
                    name,
                    description,
                    media_id,
                },
            });
            res.json(updatedPremissesType);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to update premisses type' });
        }
    }
    static async deletePremissesType(req, res) {
        const { id } = req.params;
        try {
            await prisma.premissestype.delete({ where: { premisses_type_id: Number(id) } });
            res.sendStatus(204);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete premisses type' });
        }
    }
}
export default PremissesTypeController;
//# sourceMappingURL=PremissesTypeController.js.map