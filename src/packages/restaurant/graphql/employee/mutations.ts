export const mutations = `
    addEmployee(employee: EmployeeInput!): Employee
    updateEmployee(employeeId: ID!, employee: EmployeeInput!): Employee
    deleteEmployee(employeeId: ID!): Employee
`;
