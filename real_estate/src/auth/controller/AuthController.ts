import {NextFunction, Request, Response} from "express";
import logging from "../../config/logging.js";
import bcryptjs from 'bcryptjs';
import signJWT from '../functions/signJTW.js';
import { PrismaClient } from '@prisma/client';

const NAMESPACE = 'AuthController';
const prisma = new PrismaClient();

class AuthController {
    static register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { first_name, second_name, father_name, email, phone_number, password, role } = req.body;

            const hashedPassword = await bcryptjs.hash(password, 10);

            const user = await prisma.user.create({
                data: {
                    first_name,
                    second_name,
                    father_name,
                    email,
                    phone_number,
                    role,
                    password: hashedPassword,
                },
            });

            logging.info(NAMESPACE, `User with id ${user.user_id} inserted.`);

            return res.status(201).json(user);
        } catch (error) {
            const errorMessage = (error as Error).message;

            logging.error(NAMESPACE, errorMessage, error);

            return res.status(500).json({
                message: errorMessage,
                error,
            });
        }
    };

    static login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;

            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                return res.status(401).json({
                    message: 'User not found',
                });
            }

            const passwordMatch = await bcryptjs.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({
                    message: 'Password mismatch',
                });
            }

            const token = await signJWT(user);

            return res.status(200).json({
                message: 'Auth Successful',
                token,
                ...user,
            });
        } catch (error) {
            const errorMessage = (error as Error).message;

            logging.error('AuthController', errorMessage, error);

            return res.status(500).json({
                message: errorMessage,
                error,
            });
        }
    };

    static validateToken = (req: Request, res: Response, next: NextFunction) => {
        logging.info(NAMESPACE, 'Token validated, user authorized.');

        return res.status(200).json({
            message: 'Token(s) validated'
        });
    };
}

export default AuthController;
