import Cuisine from "../../../../db/restaurants/cuisine.model"
import { v4 as uuid } from 'uuid';

const queries = {
    getCuisines: async (_:any) => {
        try {
            const cuisines = await Cuisine.findAll();
            return cuisines;
        } catch (error) {
            throw error;
        }
    },

    getCuisine: async (_: any, {cuisineId}: {cuisineId : typeof uuid}) => {
        try {
            const cuisine = await Cuisine.findOne({
                where: {
                    cuisineId
                }
            });
            if (!cuisine) {
                throw new Error('Cuisine not found');
            }
            return cuisine;
        } catch (error) {
            throw error;
        }
    }

}

export const resolvers = { queries };
