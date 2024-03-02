import Employee from "../../../db/restaurants/employee.model";

export const addEmployee = async ({RestaurantId ,firstName, lastName, contactNo, emailId, password, role, address, pincode, isVerified, isBlocked}:{
    firstName: string,
    lastName: string,
    RestaurantId: string,
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
            firstName: firstName,
            lastName: lastName,
            restaurantId: RestaurantId,
            contactNo: contactNo,
            emailId: emailId,
            password: password,
            role: role,
            address: address,
            pincode: pincode,
            isVerified: isVerified,
            isBlocked: isBlocked
        });
        return employee;
    } catch (error) {
        throw error;
    }
}


export const getEmployeesByRestaurant = async ({RestaurantId}:{
    RestaurantId: string
}) => {
    try {
        const employees = await Employee.findAll({
            where: {
                restaurantId: RestaurantId
            }
        });
        return employees;
    } catch (error) {
        throw error;
    }
}




export const deleteEmployeeByRestaurant = async ({employeeId}:{
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
        await employee.save();
        return employee;
    } catch (error) {
        throw error;
    }
}


