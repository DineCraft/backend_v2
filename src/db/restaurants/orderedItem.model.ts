import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../../config/sequelize';
import {v4 as uuidv4} from 'uuid';



class OrderedItem extends Model{}


OrderedItem.init({
    orderedItemId:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: ()=>uuidv4()
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    specialRequest:{
        type: DataTypes.STRING(100),
        allowNull: true
    }

},{
    sequelize,
    modelName: 'OrderedItem',
    timestamps: true
})

console.log(OrderedItem === sequelize.models.OrderedItem);


export default OrderedItem;