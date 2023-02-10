import { Sequelize } from "sequelize";
import db from "../database/db.js";
const DataTypes = Sequelize;

const Penulis = db.define(
  "penulis",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      max: 5,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Penulis;
