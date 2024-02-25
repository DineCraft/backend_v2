export const types = `
    type Category {
        categoryId: ID!
        categoryName: String!
        cuisineId: ID!
    }

    input CategoryInput {
        categoryName: String!
        cuisineId: ID!
    }
`;

