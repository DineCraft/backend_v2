import User from '../../../db/restaurants/user.model';

import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

export const register = async ({ name , email, password } : {
        name: string,
        email: string,
        password: string,

    }) => {
        try {
            const firstName = name.split(' ')[0];
            const lastName = name.split(' ')[1];
            const user = await User.create({
                firstName,
                lastName,
                email,
                password: bcrypt.hashSync(password, 10)
            });
            return user;
        } catch (error) {
            
            throw error;
        }
}

export const login = async ({email, password} : {
    email: string,
    password: string
}) => {
    try {
        const user: any = await User.findOne({
            where: {
                email
            }
        });
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const user_id = user.userId;

        const token = Jwt.sign({userId: user_id}, process.env.JWT_SECRET as string, {expiresIn: '1d'}); 
        const userWithoutPassword = {
            ...user.toJSON(),
            password: undefined 
        };
        return {token, user: userWithoutPassword};
    } catch (error) {
        throw error;
    }
}