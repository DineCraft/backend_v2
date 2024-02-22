import { initServer } from "./app/initServer";

const PORT = process.env.PORT || 3000;
async function main(){
  const app = await initServer();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

}

main();