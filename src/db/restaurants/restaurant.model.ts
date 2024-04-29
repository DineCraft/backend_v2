const { Sequelize, DataTypes, Model } = require('sequelize');
import { sequelize } from  '../../config/sequelize';

class Restaurant extends Model {}

Restaurant.init({
  restaurantId:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  restaurantName:{
    type: DataTypes.STRING(100),
    allowNull: false
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
  userId:{
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'restaurant', 
  timestamps: true,
});

// the defined model is the class itself
console.log(Restaurant === sequelize.models.User); // true

export default Restaurant;