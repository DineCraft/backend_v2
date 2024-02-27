import Category from "../../../db/restaurants/category.model";
import Cuisine from "../../../db/restaurants/cuisine.model";

export const getCategories = async({cuisineId}: {cuisineId: string})=>{
    try{
        const categories = await Category.findAll({
            where: {
                cuisineId,
                isDeleted: false
            }
        })

        return categories;
    }
    catch(err){
        throw err;
    }
}

export const getCategory = async({categoryId}: {categoryId: string})=>{
    try{
        const category = await Category.findOne({
            where: {
                categoryId,
                isDeleted: false
            }
        })

        if(!category){
            throw new Error("Category not found");
        }

        return category;
    }
    catch(err){
        throw err;
    }
}


export const addCategory = async({cuisineId, categoryName}: {cuisineId:string, categoryName: string})=>{

    try{
        const category= await Category.create({
            categoryName: categoryName,
            cuisineId: cuisineId
        })

        return category;

    }
    catch(err){
        throw err;
    }

}

export const deleteCategory = async({categoryId}: {categoryId: string})=>{
    try{
        const category = await Category.findOne({
            where: {
                categoryId,
                isDeleted: false
            }
        })

        if(!category){
            throw new Error("Category not found");
        }
        category.setAttributes('isDeleted', true);
        await category.save();

        return category;
    }
    catch(err){
        throw err;
    }
}