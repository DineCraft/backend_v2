import User from '../../../db/restaurants/user.model';

import bcrypt from 'bcrypt';



export const register = async ({firstName, lastName, restaurantName, contactNo,  emailId, password, address, pincode} : {
        emailId: string,
        password: string,
        address: string,
        pincode: number,
        firstName: string,
        lastName: string,
        restaurantName: string,
        contactNo: number

    }) => {
        try {
            const user = await User.create({
                firstName,
                lastName,
                restaurantName,
                contactNo,
                emailId,
                password: bcrypt.hashSync(password, 10),
                address,
                pincode
            });
            return user;
        } catch (error) {
            throw error;
        }
}

export const login = async ({emailId, password} : {
    emailId: string,
    password: string
}) => {
    try {
        const user = await User.findOne({
            where: {
                emailId
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
}