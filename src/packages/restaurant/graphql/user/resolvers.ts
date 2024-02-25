import User  from '../../../../db/restaurants/models/user.model';


import bcrypt from 'bcrypt';

const queries = {
    verifyUser: async (parent: any, {email, password}:{ email: string, password: string}) => {
        try {
            const user = await User.findOne({
                where: {
                    emailId: email
                }
            });
            if (!user) {
                throw new Error('User not found');
            }
            const isPasswordValid = bcrypt.compareSync(password, user.password);

            if (!isPasswordValid) {
                throw new Error('Invalid password');
            }

            return user;
        } catch (error) {
            throw error;
        }
    },
    getUser: async (parent: any, {userId}:{ userId: string}) => {
        try {
            const user = await User.findOne({
                where: {
                    userId
                }
            });
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            throw error;
        }
    },
    getUsers: async (parent: any, args: any) => {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    }
}

export const resolvers = { queries };