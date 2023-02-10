import express from "express";
import {
  getPenulis,
  postPenulis,
  deletePenulis,
  getPenulisById,
  putPenulisById,
} from "../controller/penulis.js";
const router = express.Router();

router.get("/penulis", getPenulis);
router.get("/penulis/:id", getPenulisById);

router.post("/penulis", postPenulis);
router.delete("/penulis/:id", deletePenulis);

router.put("/penulis/:id", putPenulisById);
export default router;
