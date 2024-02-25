import User from "../models/user.model";

const userResolver = {
    Query: {
        user: async (parent: any, args: any, context: any, info: any) => {
            try {
                const user = await User.findOne({
                    where: {
                        userId: args.userId
                    }
                });
                return user;
            } catch (error) {
                throw error;
            }
        },
        users: async (parent: any, args: any, context: any, info: any) => {
            try {
                const users = await User.findAll();
                return users;
            } catch (error) {
                throw error;
            }
        }
    },
    Mutation: {
        register: async (parent: any, args: any, context: any, info: any) => {
            try {
                const user = await User.create(args.user);
                return user;
            } catch (error) {
                throw error;
            }
        }

    }
}
