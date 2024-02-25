import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../../config/sequelize';
import {v4 as uuidv4} from 'uuid';

class Plan extends Model{}

Plan.init({
    planId:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: ()=>uuidv4()
    },
    planName:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    planDescription:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    planPrice:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    planDuration:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    planStatus:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    isDeleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    sequelize,
    modelName: 'Plan',
    timestamps: true
})

export default Plan;
