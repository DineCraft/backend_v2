import { Sequelize } from 'sequelize';

import { sequelize } from '../../../config/sequalize';
import User from './user.model';

interface Database {
  sequelize: Sequelize;
  User: typeof User;
}

const db: Database = {} as Database;

db.sequelize = sequelize;
db.User = User;


export function sync_models(){
    db.sequelize.sync({ force: false, alter: false }).then(() => {
		console.log(` Database Synced...`)
    })
}
export default db;
