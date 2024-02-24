const UserTypeDef =`
    type User {
        userId: ID!
        firstName: String!
        lastName: String!
        restaurantName: String!
        contactNo: String!
        emailId: String!
        password: String!
        address: String!
        pincode: Int!
        isVerified: Boolean
        isBlocked: Boolean
        isDeleted: Boolean
    }
    input UserInput {
        firstName: String!
        lastName: String
        restaurantName: String!
        contactNo: String!
        emailId: String!
        password: String!
        address: String!
        pincode: Int!
    }

    extend type Query {
        user(userId: ID!): User
        users: [User]
    }

    extend type Mutation {
        register(user: UserInput!): User
        login(emailId: String!, password: String!): User
    }
`;

export default UserTypeDef;