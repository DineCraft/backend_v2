import { initServer } from "./app/initServer";
import { sequelize } from "./config/sequelize";
import { sync_models } from "./db/restaurants";
import SocketService from "./app/socket";


const PORT = process.env.PORT || 5001;


async function main(){
  try {
    const app = await initServer();

    const socketService = new SocketService();
    // Authenticate with the database
    await sequelize.authenticate();


    if (process.env.NODE_ENV !== 'production') {
      sync_models();
    } else {
      console.log(`Database synchronization skipped in production environment.`);
    }

    const server =app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    socketService.io.attach(server);
    socketService.initListeners();
  } catch (error) {
    console.error('An error occurred during initialization:', error);
    process.exit(1);
  }
}

main();
