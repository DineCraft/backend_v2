const OrderTypeDef = `

    type Order {
        orderId: ID!
        userId: ID!
        restaurantId: ID!
        orderedItems: [OrderedItem]
        orderStatus: String!
        orderDate: String!
        orderTime: String!
        totalAmount: Int!
    }

    input OrderInput {
        userId: ID!
        restaurantId: ID!
        orderedItems: [OrderedItemInput]
        orderStatus: String!
        orderDate: String!
        orderTime: String!
        totalAmount: Int!
    }

    extend type Query {
        order(orderId: ID!): Order
        orders: [Order]
    }

    extend type Mutation {
        addOrder(order: OrderInput!): Order
        updateOrder(orderId: ID!, order: OrderInput!): Order
        deleteOrder(orderId: ID!): Order
    }

`;

export default OrderTypeDef;
