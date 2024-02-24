import { Sequelize } from 'sequelize';

import { sequelize } from  '../../../config/sequelize';
import User from './user.model';
import MenuItem from './menuItem.model';

interface Database {
  sequelize: Sequelize;
  User: typeof User;
  MenuItem: typeof MenuItem;
}

const db: Database = {} as Database;

db.sequelize = sequelize;
db.User = User;
db.MenuItem = MenuItem;


export function sync_models(){
    db.sequelize.sync({ force: true }).then(() => {
		console.log(` Database Synced...`)
    })
}
export default db;
