import { Sequelize } from "sequelize";
import db from "../database/db.js";
import Penulis from "./penulis.js";
const DataTypes = Sequelize;

const Berita = db.define(
  "berita",
  {
    idberita: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      max: 10,
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    isi: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    tanggalRilis: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    penulis: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Penulis,
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Berita;
