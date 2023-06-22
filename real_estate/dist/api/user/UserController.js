import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class UserController {
    static async getAllUser(req, res) {
        try {
            const users = await prisma.user.findMany();
            res.json(users);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error retrieving users' });
        }
    }
    static async getUserById(req, res) {
        const userId = parseInt(req.params.userId);
        try {
            const user = await prisma.user.findUnique({ where: { user_id: userId } });
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.json(user);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error retrieving user' });
        }
    }
    static async createUser(req, res) {
        const { first_name, second_name, father_name, email, phone_number, role, password } = req.body;
        try {
            const user = await prisma.user.create({
                data: {
                    first_name,
                    second_name,
                    father_name,
                    email,
                    phone_number,
                    role,
                    password
                },
            });
            res.json(user);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error creating user' });
        }
    }
    static async updateUser(req, res) {
        const userId = parseInt(req.params.userId);
        const { first_name, second_name, father_name, email, phone_number, password } = req.body;
        try {
            const user = await prisma.user.update({
                where: { user_id: userId },
                data: {
                    first_name,
                    second_name,
                    father_name,
                    email,
                    phone_number,
                    password
                },
            });
            res.json(user);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error updating user' });
        }
    }
    static async deleteUser(req, res) {
        const userId = parseInt(req.params.userId);
        try {
            await prisma.user.delete({ where: { user_id: userId } });
            res.json({ message: 'User deleted successfully' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting user' });
        }
    }
}
export default UserController;
//# sourceMappingURL=UserController.js.map