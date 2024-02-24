import { initServer } from "./app/initServer";
import { sequelize } from "./config/sequalize";
import { sync_models } from "./db/restaurants/models";


const PORT = process.env.PORT || 5001;


async function main(){
  try {
    const app = await initServer();
    
    // Authenticate with the database
    await sequelize.authenticate();

    if (process.env.NODE_ENV !== 'production') {
      sync_models();
      console.log(` Database synchronized...`);
    } else {
      console.log(`Database synchronization skipped in production environment.`);
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('An error occurred during initialization:', error);
    process.exit(1);
  }
}

main();
