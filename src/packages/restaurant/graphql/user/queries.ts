export const queries = `
    verifyUser(email: String!, password: String!): User
    getUser(userId: ID!): User
    getUsers: [User]
`;