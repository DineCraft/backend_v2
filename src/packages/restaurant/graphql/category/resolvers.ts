import Category from "../../../../db/restaurants/category.model";

export const queries = {
    categories: async (_:any) => {
        try {
            const categories = await Category.findAll();
            return categories;
        } catch (error) {
            throw error;
        }
    },

    category: async (_: any, args: any) => {
        return await Category.findOne(
            {
                where: {
                    categoryId: args.categoryId
                }
            }
        );
    }

}

export const resolvers = { queries };