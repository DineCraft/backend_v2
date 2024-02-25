const OrderedItemTypeDef = `

    type OrderedItem {
        orderedItemId: ID!
        quantity: Int!
        price: Int!
        specialRequest: String
    }

    input OrderedItemInput {
        quantity: Int!
        price: Int!
        specialRequest: String
    }

    extend type Query {
        orderedItem(orderedItemId: ID!): OrderedItem
        orderedItems: [OrderedItem]
    }

    extend type Mutation {
        addOrderedItem(orderedItem: OrderedItemInput!): OrderedItem
        updateOrderedItem(orderedItemId: ID!, orderedItem: OrderedItemInput!): OrderedItem
        deleteOrderedItem(orderedItemId: ID!): OrderedItem
    }


`;

export default OrderedItemTypeDef;