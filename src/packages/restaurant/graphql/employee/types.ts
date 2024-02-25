import {Role} from '../../../../app/utils/role'

export const types = `
    type Employee {
        employeeId: ID!
        firstName: String!
        lastName: String
        email: String!
        password: String!
        role: String!
        salary: Float
        phone: String!
        address: String!
        status: Boolean
    }
    input EmployeeInput {
        firstName: String!
        lastName: String
        email: String!
        password: String!
        role: String!
        salary: Float
        phone: String!
        address: String!
    }
`;
