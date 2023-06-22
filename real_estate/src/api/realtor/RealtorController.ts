import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class RealtorController {
    static async getAllRealtors(req: Request, res: Response) {
        try {
            const realtors = await prisma.realtor.findMany();
            res.json(realtors);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to fetch realtors" });
        }
    }

    static async getRealtorById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const realtor = await prisma.realtor.findUnique({
                where: {
                    realtor_id : Number(id)
                }
            })
            if (realtor) {
                res.json(realtor);
            } else {
                res.status(404).json({ error: "Realtor not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to fetch realtor" });
        }
    }

    static async getRealtorByName(req: Request, res: Response) {
        const { name } = req.params;
        try {
            const realtor = await prisma.realtor.findUnique({ where: { name } });
            if (realtor) {
                res.json(realtor);
            } else {
                res.status(404).json({ error: "Realtor not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to fetch realtor" });
        }
    }

    static async createRealtor(req: Request, res: Response) {
        const {
            name,
            location,
            phone_number
        } = req.body;
        try {
            const realtor = await prisma.realtor.create({
                data: {
                    name,
                    location,
                    phone_number
                },
            });
            res.status(201).json(realtor);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create realtor" });
        }
    }

    static async updateRealtor(req: Request, res: Response) {
        const { id } = req.params;
        const {
            name,
            location,
            phone_number
        } = req.body;
        try {
            const updatedRealtor = await prisma.realtor.update({
                where: { realtor_id: Number(id) },
                data: {
                    name,
                    location,
                    phone_number
                },
            });
            res.json(updatedRealtor);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to update realtor" });
        }
    }

    static async deleteRealtor(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await prisma.realtor.delete({ where: { realtor_id: Number(id) } });
            res.sendStatus(204);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete realtor" });
        }
    }
}

export default RealtorController;
