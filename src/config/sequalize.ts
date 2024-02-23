

import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();

// Option 1: Passing a connection URI
export const sequelize = new Sequelize(`${process.env.DATABASE_URL}`) // Example for postgres

