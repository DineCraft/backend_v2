const EmployeeTypeDef = `
    type Employee {
        employeeId: ID!
        firstName: String!
        lastName: String
        email: String!
        password: String!
        role: Role!
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
        role: Role!
        salary: Float
        phone: String!
        address: String!
    }

    extend type Query {
        employee(employeeId: ID!): Employee
        employees: [Employee]
    }

    extend type Mutation {
        addEmployee(employee: EmployeeInput!): Employee
        updateEmployee(employeeId: ID!, employee: EmployeeInput!): Employee
        deleteEmployee(employeeId: ID!): Employee
    }

`;

export default EmployeeTypeDef;