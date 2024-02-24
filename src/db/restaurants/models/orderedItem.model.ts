import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../../../config/sequelize';
import {v4 as uuidv4} from 'uuid';


class OrderedItem extends Model{}


OrderedItem.init({
    orderedItemId:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: ()=>uuidv4()
    },

},{
    sequelize,
    modelName: 'OrderedItem',
    timestamps: true
})