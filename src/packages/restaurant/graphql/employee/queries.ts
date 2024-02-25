export const queries = `
    verifyEmployee(email: String!, password: String!): Employee
    getEmployee(employeeId: ID!): Employee
    getEmployees: [Employee]
`;
