const { Sequelize, DataTypes, Model } = require('sequelize');
import { sequelize } from  '../../config/sequelize';
import Cuisine from './cuisine.model';

import Employee  from './employee.model';

import Order from './order.model';




class User extends Model {}

User.init({
  // Model attributes are defined here
  userId:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  firstName: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(100)
    // allowNull defaults to true
  },
  restaurantName:{
    type: DataTypes.STRING(100),
    allowNull: false
  },
  contactNo:{
    type: DataTypes.STRING(15),
    allowNull: false
  },
  emailId:{
    type: DataTypes.STRING(100),
    allowNull: false
  },
  password:{
    type: DataTypes.STRING(100),
    allowNull:false
  },
  address:{
    type: DataTypes.JSON,
    allowNull: false
  },
  pincode:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isVerified:{
    type: DataTypes.BOOLEAN,
    // allowNull: false
  },
  isBlocked:{
    type: DataTypes.BOOLEAN,
    // allowNull: false
  },  
  isDeleted:{
    type: DataTypes.BOOLEAN,
    // allowNull: false
  },



}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  timestamps: true,
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

User.hasMany(Employee,{
  foreignKey: 'userId',
  as: 'employees'
});

User.hasMany(Order,{
  foreignKey: 'userId',
  as: 'orders'
}
);

User.hasMany(Cuisine,{
  foreignKey: 'userId',
  as: 'cuisines'
})



export default User;