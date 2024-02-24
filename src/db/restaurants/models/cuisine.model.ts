import {Model , DataTypes} from 'sequelize';
import {sequelize} from '../../../config/sequelize';
import {v4 as uuidv4} from 'uuid';
import Category from './category.model';

class Cuisine extends Model{}

Cuisine.init({
    cuisineId:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: ()=>uuidv4()
    },
    cuisineName:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Cuisine',
    timestamps: true
})

console.log(Cuisine === sequelize.models.Cuisine);

Cuisine.hasMany(Category, {
    foreignKey: "cuisineId",
    as: "categories"
})

export default Cuisine;

