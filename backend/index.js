import { config } from "dotenv";
config();
import express from "express";
import sequelize from "./db.js";

const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
