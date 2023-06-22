import config from "../../config/config.js";
import jwt from "jsonwebtoken";
import logging from "../../config/logging.js";
import { PrismaClient, user } from "@prisma/client"


const NAMESPACE = 'Auth';
const prisma = new PrismaClient();

const signJWT = (user: user): Promise<string> => {
    return new Promise((resolve, reject) => {
        const timeSinceEpoch = new Date().getTime();
        const expirationTime = timeSinceEpoch + Number(config.server.token.expireTime) * 100000;
        const expirationTimeInSeconds = Math.floor(expirationTime / 1000);

        logging.info('AuthController', `Attempting to sign token for ${user.user_id}`);

        try {
            const token = jwt.sign(
                {
                    id: user.user_id
                },
                config.server.token.secret,
                {
                    issuer: config.server.token.issuer,
                    algorithm: 'HS256',
                    expiresIn: expirationTimeInSeconds,
                }
            );

            resolve(token);
            logging.info('AuthController', "Sign up!");
        } catch (error) {
            const errorMessage = (error as Error).message;
            logging.error('AuthController', errorMessage, error);
            reject(error);
        }
    });
};

export default signJWT;
