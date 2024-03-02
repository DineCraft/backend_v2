import Cuisine from "../../../db/restaurants/cuisine.model";

export const addCuisine = async ({cuisineName, restaurantId}:{
    cuisineName: string,
    restaurantId: string
}) => {
    try {
        const cuisine = await Cuisine.create({
            cuisineName: cuisineName,
            restaurantId: restaurantId
        });
        return cuisine;
    } catch (error) {
        throw error;
    }
}

export const getCuisinesByRestaurant = async ({restaurantId}:{
    restaurantId: string
}) => {
    try {
        const cuisines = await Cuisine.findAll({
            where: {
                restaurantId
            }
        });
        return cuisines;
    } catch (error) {
        throw error;
    }
}       

export const getCuisine = async ({cuisineId}:{
    cuisineId: string
}) => {
    try {
        const cuisine = await Cuisine.findOne({
            where: {
                cuisineId
            }
        });
        return cuisine;
    } catch (error) {
        throw error;
    }
}

export const updateCuisine = async ({cuisineId, cuisineName}:{
    cuisineId: string,
    cuisineName: string
}) => {
    try {
        const cuisine = await Cuisine.findOne({
            where: {
                cuisineId
            }
        });
        if (!cuisine) {
            throw new Error('Cuisine not found');
        }
        await cuisine.update({
            cuisineName
        });
        return cuisine;
    } catch (error) {
        throw error;
    }
}

