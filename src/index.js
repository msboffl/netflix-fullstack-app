import dotenv from "dotenv";
import { app } from "./app.js";

// Environment Variables
dotenv.config({
  path: "./.env",
});

const PORT_NUMBER = process.env.PORT_NUMBER;
const HOST_NAME = process.env.HOST_NAME;

const startServer = () => {
  app.listen(PORT_NUMBER, () => {
    console.log(`🚀🚀Server runnig at http://${HOST_NAME}:${PORT_NUMBER}`);
  });
};

// Server Started
startServer();
