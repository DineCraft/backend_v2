import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../../config/sequelize';
import {v4 as uuidv4} from 'uuid'
import {Role} from '../../app/utils/role'

class Employee extends Model{};




Employee.init({
    employeeId:{
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
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM(Role.ADMIN, Role.MANAGER, Role.WAITER, Role.CHEF),
        allowNull: false
    },
    salary:{
        type: DataTypes.FLOAT,
        // allowNull: false
    },
    phone:{
        type: DataTypes.STRING(15),
        allowNull: false
    },
    address:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

},{

    sequelize,
    modelName: 'employee',
    timestamps: true,

});

export default Employee;