export const mutations = `
    addUser(user: UserInput!): User
    updateUser(userId: ID!, user: UserInput!): User
    deleteUser(userId: ID!): User
`;
