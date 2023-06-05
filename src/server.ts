import mongoose from "mongoose";
import app from "./app";
import config from "./Config/index";



async function dbConnected() {
   try {
    await mongoose.connect(config.database_url as string);
    console.log("Database Connected Successfully");

    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
      })

   } catch (error) {
    console.log("failed to database connected");
   }
  
  }

  dbConnected();



//   campusCura-auth-admin ,7JkFRBhivPXV3qr5