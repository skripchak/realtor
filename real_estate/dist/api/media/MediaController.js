import multer from 'multer';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import * as fs from "fs";
import config from "../../config/config.js";
const prisma = new PrismaClient();
const uploads = multer({ dest: 'storage' });
class MediaController {
    static getMediaFile(req, res, next) {
        const { filename } = req.params;
        const filePath = path.join(config.server.main_path, 'storage', filename);
        res.sendFile(filePath, (err) => {
            if (err) {
                next(err);
            }
        });
    }
    static async getAllMediaByPremissesId(req, res, next) {
        const { id } = req.params;
        try {
            const media = await prisma.media.findMany({
                where: {
                    premisses_id: parseInt(id),
                },
            });
            for (const item of media) {
                item.file_name = path.join('storage', item.file_name);
            }
            res.json(media);
        }
        catch (error) {
            next(error);
        }
    }
    static async getAllMediaByRealtorId(req, res, next) {
        const { id } = req.params;
        try {
            const media = await prisma.media.findMany({
                where: {
                    realtor_id: parseInt(id),
                },
            });
            for (const item of media) {
                item.file_name = path.join('storage', item.file_name);
            }
            res.json(media);
        }
        catch (error) {
            next(error);
        }
    }
    static async getAllMediaByUserId(req, res, next) {
        const { id } = req.params;
        try {
            const media = await prisma.media.findMany({
                where: {
                    user_id: parseInt(id),
                },
            });
            for (const item of media) {
                item.file_name = path.join('storage', item.file_name);
            }
            res.json(media);
        }
        catch (error) {
            next(error);
        }
    }
    static async createMedia(req, res, next) {
        if (req.file) {
            const { filename, originalname } = req.file;
            const { premissesId, realtorId, userId } = req.body;
            try {
                const temp1 = originalname.toString();
                const temp = path.basename(filename).concat(path.extname(temp1));
                let media;
                if (premissesId != undefined) {
                    media = await prisma.media.create({
                        data: {
                            file_name: temp,
                            file_name_orig: temp1,
                            premisses_id: Number(premissesId),
                        },
                    });
                }
                else if (realtorId != undefined) {
                    media = await prisma.media.create({
                        data: {
                            file_name: temp,
                            file_name_orig: temp1,
                            realtor_id: Number(realtorId),
                        },
                    });
                }
                else {
                    media = await prisma.media.create({
                        data: {
                            file_name: temp,
                            file_name_orig: temp1,
                            user_id: Number(userId),
                        },
                    });
                }
                res.json(media);
            }
            catch (error) {
                next(error);
            }
        }
        else {
            res.status(400).json({ error: 'No file uploaded' });
        }
    }
    static async deleteMedia(req, res, next) {
        const { id } = req.params;
        try {
            const media = await prisma.media.findUnique({
                where: {
                    media_id: parseInt(id),
                },
            });
            if (!media) {
                return res.status(404).json({ error: 'Media not found' });
            }
            // Delete the file from storage
            const filePath = path.join('storage', media.file_name);
            fs.unlink(filePath, (error) => {
                if (error) {
                    console.error('Error deleting file:', error);
                }
            });
            // Delete the media record from the database
            await prisma.media.delete({
                where: {
                    media_id: parseInt(id),
                },
            });
            res.json({ message: 'Media deleted successfully' });
        }
        catch (error) {
            next(error);
        }
    }
}
export default MediaController;
//# sourceMappingURL=MediaController.js.map