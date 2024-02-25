const MenuTypeDef = `
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
        itemName: String!
        itemDescription: String
        itemPrice: Int!
        itemImage: String
        isAvailable: Boolean!
        isVeg: Boolean!
        quantity: Int!
    }

    extend type Query {
        menu(menuId: ID!): Menu
        menus: [Menu]
    }

    extend type Mutation {
        addMenuItem(menu: MenuInput!): Menu
        updateMenuItem(menuId: ID!, menu: MenuInput!): Menu
        deleteMenuItem(menuId: ID!): Menu
    }


`;

export default MenuTypeDef;