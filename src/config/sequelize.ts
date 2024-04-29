

import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();

export const sequelize = new Sequelize(`${process.env.DATABASE_URL}`,{
    logging: false,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: false,
            rejectUnauthorized: false
        }
    }
}) 

