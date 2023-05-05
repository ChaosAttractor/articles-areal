import { DataTypes } from "sequelize";
import sequalize from "../db.js";

const Comments = sequalize.define("comments", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, allowNull: false },
});

export { Comments };
