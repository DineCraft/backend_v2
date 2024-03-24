export const types = `
    type Table {
        tableId: ID!
        tableName: String!
        restaurantId: ID!
        isDeleted: Boolean!
    }
    input TableInput {
        tableName: String!
        restaurantId: ID!
    }
`;

