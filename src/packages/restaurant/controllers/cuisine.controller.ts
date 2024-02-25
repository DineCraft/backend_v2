import Cuisine from "../../../db/restaurants/cuisine.model";

export const addCuisine = async ({cuisineName, restaurantId}:{
    cuisineName: string,
    restaurantId: string
}) => {
    try {
        const cuisine = await Cuisine.create({
            cuisineName,
            restaurantId
        });
        return cuisine;
    } catch (error) {
        throw error;
    }
}
