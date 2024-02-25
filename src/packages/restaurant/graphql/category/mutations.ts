export const mutations = `
    addCategory(name: String!): Category
    updateCategory(categoryId: ID!, name: String!): Category
    deleteCategory(categoryId: ID!): Category
`;
