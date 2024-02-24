import { DataTypes, Model } from "sequelize";
import { sequelize } from  '../../../config/sequelize';
import {v4 as uuidv4} from 'uuid';

class MenuItem extends Model {}

MenuItem.init(
    {
        // Model attributes are defined here
        menuId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: ()=>uuidv4(),
        },
        itemName: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        itemDescription: {
            type: DataTypes.STRING(100),
            // allowNull: false,
        },
        itemPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        itemImage: {
            type: DataTypes.STRING(100),
            // allowNull: false,
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        isVeg: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: "MenuItem", // We need to choose the model name
    }
);

// the defined model is the class itself
console.log(MenuItem === sequelize.models.MenuItem); // true

export default MenuItem;
