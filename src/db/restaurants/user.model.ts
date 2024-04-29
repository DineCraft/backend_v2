import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../../config/sequelize';
import {v4 as uuidv4} from 'uuid'
import {Role} from '../../app/utils/role'

class User extends Model{};


User.init({
    UserId:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: ()=> uuidv4()
    },
    firstName:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING(20),
        allowNull: true
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM( Role.MANAGER, Role.WAITER, Role.CHEF, Role.RESTAURANT_OWNER),
    },
    salary:{
        type: DataTypes.FLOAT,
    },
    phone:{
        type: DataTypes.STRING(15),

    },
    address:{
        type: DataTypes.STRING(100),
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    isDeleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    
},{

    sequelize,
    modelName: 'user',
    timestamps: true,

});

export default User;