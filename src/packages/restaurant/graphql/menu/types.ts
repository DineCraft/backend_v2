export const types = `
    type Menu {
        menuId: ID!
        itemName: String!
        itemDescription: String
        itemPrice: Int!
        itemImage: String
        isAvailable: Boolean!
        isVeg: Boolean!
        quantity: Int!
    }
    input MenuInput {
        cuisineId: ID!
        itemName: String!
        price: Float!
    }
`;

