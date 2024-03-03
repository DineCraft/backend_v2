import {Model , DataTypes} from 'sequelize';
import {sequelize} from '../../config/sequelize';
import {v4 as uuidv4} from 'uuid';

class Table extends Model{};

Table.init({
    tableId:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: ()=>uuidv4()
    },
    tableName:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    tableStatus:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    isDeleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

},{
    sequelize,
    modelName: 'Table',
    timestamps: true
})


export default Table;