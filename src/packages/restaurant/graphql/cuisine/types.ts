export const types = `
    type Cuisine {
        cuisineId: ID!
        cuisineName: String!
        isDeleted: Boolean
    }
    input CuisineInput {
        cuisineName: String!
    }
`;
