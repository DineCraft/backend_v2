import Employee from "../../../db/restaurants/employee.model";

export const addEmployee = async ({restaurant_id ,firstName, lastName, phone, emailId, password, role, address, isVerified, isBlocked}:{
    firstName: string,
    lastName: string,
    restaurant_id: string,
    phone: string,
    emailId: string,
    password: string,
    role: string,
    address: string,
    isVerified: boolean,
    isBlocked: boolean
}) => {
    try {

        const employee = await Employee.create({
            firstName: firstName,
            lastName: lastName,
            restaurantId: restaurant_id,
            phone: phone,
            email: emailId,
            password: password,
            role: role,
            address: address,
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


