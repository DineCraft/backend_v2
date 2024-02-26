import Employee from "../../../db/restaurants/employee.model";

export const addEmployee = async ({firstName, lastName, restaurantId, contactNo, emailId, password, role, address, pincode, isVerified, isBlocked}:{
    firstName: string,
    lastName: string,
    restaurantId: string,
    contactNo: string,
    emailId: string,
    password: string,
    role: string,
    address: string,
    pincode: number,
    isVerified: boolean,
    isBlocked: boolean
}) => {
    try {
        const employee = await Employee.create({
            firstName,
            lastName,
            restaurantId,
            contactNo,
            emailId,
            password,
            role,
            address,
            pincode,
            isVerified,
            isBlocked
        });
        return employee;
    } catch (error) {
        throw error;
    }
}


export const getEmployee = async ({employeeId}:{
    employeeId: string
}) => {
    try {
        const employee = await Employee.findOne({
            where: {
                employeeId
            }
        });
        return employee;
    } catch (error) {
        throw error;
    }
}


export const deleteEmployee = async ({employeeId}:{
    employeeId: string
}) => {
    try {
        const employee = await Employee.findOne({
            where: {
                employeeId
            }
        });
        if (!employee) {
            throw new Error('Employee not found');
        }
        employee.setDataValue('isDeleted', true);
        return employee;
    } catch (error) {
        throw error;
    }
}