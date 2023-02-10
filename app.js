import express from "express";
import connection from "./database/connection.js";
import router from "./route/app.js";
import bodyParser from "body-parser";
import methodOverride from "method-override";
const app = express();
const port = 3000;

// import Berita from "./model/berita.js";
// import Penulis from "./model/penulis.js";
// import Kategori from "./model/kategori.js";
// import KategoriBerita from "./model/kategoriBerita.js";

// Penulis.sync({ force: true });
// Kategori.sync({ force: true });
// Berita.sync({ force: true });
// KategoriBerita.sync({ force: true });

connection();
app.use(methodOverride("X-HTTP-Method-Override"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
