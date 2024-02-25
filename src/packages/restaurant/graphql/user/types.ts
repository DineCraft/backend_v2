export const types =`
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
`;

