import { initServer } from "./app/initServer";
import { sequelize } from "./config/sequalize";

const PORT = process.env.PORT || 3001;
async function main(){
  const app = await initServer();
  await sequelize.authenticate();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

}

main();