import Employee from '../../../../db/restaurants/models/employee.model';

export const queries ={
    verifyEmployee: async (_: any, args: any, context: any) => {
        try {
            const employee = await Employee.findOne({
                where: {
                    email: args.email,
                    password: args.password
                }
            });
            if (!employee) {
                throw new Error('Employee not found');
            }
            return employee;
        } catch (error) {
            throw error;
        }
    }
    ,
    getEmployee: async (_: any, args: any, context: any) => {
        try {
            const employee = await Employee.findOne({
                where: {
                    employeeId: args.employeeId
                }
            });
            if (!employee) {
                throw new Error('Employee not found');
            }
            return employee;
        } catch (error) {
            throw error;
        }
    }
    ,
    getEmployees: async (_: any, args: any, context: any) => {
        try {
            const employees = await Employee.findAll();
            return employees;
        } catch (error) {
            throw error;
        }
    }

}

export const resolvers = { queries };