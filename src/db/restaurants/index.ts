import { Sequelize } from 'sequelize';

import { sequelize } from  '../../config/sequelize';
import User from './user.model';
import Restaurant from './restaurant.model';



interface Database {
  sequelize: Sequelize;
  User: typeof User;
  Restaurant: typeof Restaurant;
  
}

const db: Database = {} as Database;
db.sequelize = sequelize;
db.User = User;
db.Restaurant = Restaurant;



export async function  sync_models(){
    db.sequelize.sync({ force: false, alter: true }).then(() => {
		console.log(` Database Synced...`)
    })
}
export default db;
