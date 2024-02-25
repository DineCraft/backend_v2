const CategoryTypeDef = `
    type Category {
        categoryId: ID!
        categoryName: String!
        cuisineId: ID!
        menuItems: [MenuItem]
    }

    input CategoryInput {
        categoryName: String!
        cuisineId: ID!
    }

    extend type Query {
        category(categoryId: ID!): Category
        categories: [Category]
    }

    extend type Mutation {
        addCategory(category: CategoryInput!): Category
        updateCategory(categoryId: ID!, category: CategoryInput!): Category
        deleteCategory(categoryId: ID!): Category
    }


`;

export default CategoryTypeDef;
