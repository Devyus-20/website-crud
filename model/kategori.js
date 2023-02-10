import { Sequelize } from "sequelize";
import db from "../database/db.js";
const DataTypes = Sequelize;

const Kategori = db.define(
  "kategori",
  {
    idKategori: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      max: 4,
    },
    namaKategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Kategori;
