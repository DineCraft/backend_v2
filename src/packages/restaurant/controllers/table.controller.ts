import Table from "../../../db/restaurants/table.model";

export const getTables = async()=>{
    try{
        const tables = await Table.findAll({
            where: {
                isDeleted: false
            }
        })

        return tables;
    }
    catch(err){
        throw err;
    }
}

export const getTable = async({tableId}: {tableId: string})=>{
    try{
        const table = await Table.findOne({
            where: {
                tableId,
                isDeleted: false
            }
        })

        if(!table){
            throw new Error("Table not found");
        }

        return table;
    }
    catch(err){
        throw err;
    }
}

export const addTable = async({tableName}: {tableName: string})=>{
    try{
        const table= await Table.create({
            tableName: tableName
        })

        return table;

    }
    catch(err){
        throw err;
    }

}

export const getTablesByRestaurant = async({restaurantId}: {restaurantId: string})=>{
    try{
        const tables = await Table.findAll({
            where: {
                restaurantId,
                isDeleted: false
            }
        })

        return tables;
    }
    catch(err){
        throw err;
    }
}

export const getVacantTablesByRestaurant = async({restaurantId}: {restaurantId: string})=>{
    try{
        const tables = await Table.findAll({
            where: {
                restaurantId,
                tableStatus: true,
                isDeleted: false
            }
        })

        return tables;
    }
    catch(err){
        throw err;
    }
}
