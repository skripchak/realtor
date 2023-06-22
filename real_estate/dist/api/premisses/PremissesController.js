import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
class PremissesController {
    static async getAllPremisses(req, res) {
        try {
            const premisses = await prisma.premisses.findMany();
            res.json(premisses);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch premisses' });
        }
    }
    static async getPremissesById(req, res) {
        const { id } = req.params;
        try {
            const premisses = await prisma.premisses.findUnique({ where: { premisses_id: Number(id) } });
            if (premisses) {
                res.json(premisses);
            }
            else {
                res.status(404).json({ error: 'Premisses not found' });
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch premisses' });
        }
    }
    static async createPremisses(req, res) {
        const { premisses_type_id, realtor_id, name, renttype, description, address, room_number, floor, square, area_description, price, isposted, available, is_verificated } = req.body;
        try {
            const premisses = await prisma.premisses.create({
                data: {
                    premisses_type_id,
                    realtor_id,
                    name,
                    renttype,
                    description,
                    address,
                    room_number,
                    floor,
                    square,
                    area_description,
                    price,
                    isposted,
                    available,
                    is_verificated,
                },
            });
            res.status(201).json(premisses);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to create premisses' });
        }
    }
    static async updatePremisses(req, res) {
        const { id } = req.params;
        const { premisses_type_id, realtor_id, name, renttype, description, address, room_number, floor, square, area_description, price, isposted, available, is_verificated } = req.body;
        try {
            const updatedPremisses = await prisma.premisses.update({
                where: { premisses_id: Number(id) },
                data: {
                    premisses_type_id,
                    realtor_id,
                    name,
                    renttype,
                    description,
                    address,
                    room_number,
                    floor,
                    square,
                    area_description,
                    price,
                    isposted,
                    available,
                    is_verificated,
                },
            });
            res.json(updatedPremisses);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to update premisses' });
        }
    }
    static async deletePremisses(req, res) {
        const { id } = req.params;
        try {
            await prisma.premisses.delete({ where: { premisses_id: Number(id) } });
            res.sendStatus(204);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete premisses' });
        }
    }
}
export default PremissesController;
//# sourceMappingURL=PremissesController.js.map