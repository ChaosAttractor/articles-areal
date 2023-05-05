import { config } from "dotenv";
config();
import express from "express";
import { router as articlesRouter } from "./routes/articlesRoute.js";
import { router as commentsRouter } from "./routes/commentsRoute.js";
import sequelize from "./db.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use("", articlesRouter);
app.use("articles", commentsRouter);

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
