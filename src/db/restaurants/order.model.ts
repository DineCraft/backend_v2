import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../../config/sequelize';
import {v4 as uuidv4} from 'uuid'

import {OrderStatus} from '../../app/utils/orderStatus'
import OrderItem from './orderedItem.model'

class Order extends Model{};

Order.init({
    orderId:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: ()=> uuidv4()
    },
    orderDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    totalAmount:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    paymentMode:{
        type: DataTypes.ENUM('CASH', 'CARD'),
        allowNull: false
    },
    status:{
        type: DataTypes.ENUM(OrderStatus.PENDING, OrderStatus.CONFIRMED, OrderStatus.CANCELLED, OrderStatus.DELIVERED, OrderStatus.PAID),
        allowNull: false
    },
    tableNo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isDeleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
},{
    sequelize,
    modelName: 'order',
    timestamps: true,
});

Order.hasMany(OrderItem, {
    foreignKey: 'orderId',
    as: 'orderItems'

})

export default Order;

