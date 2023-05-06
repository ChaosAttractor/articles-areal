import { DataTypes } from "sequelize";
import sequalize from "../db.js";
import { Comments } from "./comments.js";

const Articles = sequalize.define("articles", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  desc: { type: DataTypes.TEXT, allowNull: false },
});

Articles.hasMany(Comments, { onDelete: "cascade", hooks: true });
Comments.belongsTo(Articles);

export { Articles };
