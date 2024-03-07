import { Sequelize } from 'sequelize';

import { sequelize } from  '../../config/sequelize';
import User from './user.model';
import MenuItem from './menuItem.model';
import OrderedItem from './orderedItem.model';
import Cuisine from './cuisine.model';
import Category from './category.model';
import Employee  from './employee.model';
import Order from './order.model';
import Table from './table.model';

interface Database {
  sequelize: Sequelize;
  User: typeof User;
  MenuItem: typeof MenuItem;
  OrderedItem: typeof OrderedItem;
  // Cuisine: typeof Cuisine;
  // Category: typeof Category;
  Employee: typeof Employee;
  Order: typeof Order;
}

const db: Database = {} as Database;

db.sequelize = sequelize;
db.User = User;
db.MenuItem = MenuItem;
db.OrderedItem = OrderedItem;
// db.Cuisine = Cuisine;
// db.Category = Category;
db.Employee = Employee;
db.Order = Order;


export async function  sync_models(){
    db.sequelize.sync({ force: false, alter: true }).then(() => {
		console.log(` Database Synced...`)
    })
}
export default db;
