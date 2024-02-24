import {Model , DataTypes} from 'sequelize';
import {sequelize} from '../../../config/sequelize';
import {v4 as uuidv4} from 'uuid';

class Category extends Model{}

Category.init({
    categoryId:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: ()=>uuidv4()
    },
    categoryName:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Category',
    timestamps: true
})

console.log(Category === sequelize.models.Category);

export default Category;