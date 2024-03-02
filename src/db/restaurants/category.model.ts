import {Model , DataTypes} from 'sequelize';
import {sequelize} from '../../config/sequelize';
import {v4 as uuidv4} from 'uuid';

import MenuItem from './menuItem.model';

class Category extends Model{}

Category.init({
    categoryId:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: ()=>uuidv4()
    },
    categoryName:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    isDeleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    
},{
    sequelize,
    modelName: 'Category',
    timestamps: true
})

console.log(Category === sequelize.models.Category);

Category.hasMany(MenuItem, {
    foreignKey: 'categoryId',
    as: 'menuItems'
})



export default Category;