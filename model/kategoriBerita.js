import { Sequelize } from "sequelize";
import db from "../database/db.js";
const DataTypes = Sequelize;
import Berita from "./berita.js";
import Kategori from "./kategori.js";

const KategoriBerita = db.define(
  "kategoriberita",
  {
    idKategoriBerita: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    idberita: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Berita,
        key: "idberita",
      },
    },
    idKategori: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Kategori,
        key: "idKategori",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default KategoriBerita;
