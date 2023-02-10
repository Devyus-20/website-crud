import Penulis from "../model/penulis.js";
export const getPenulis = async (req, res) => {
  const dataPenulis = await Penulis.findAll({});
  return res.render("penulis.ejs", { dataPenulis });
};
export const postPenulis = async (req, res) => {
  const { id, nama } = req.body;
  await Penulis.create({ id, nama });
  return res.redirect("/penulis");
};
export const deletePenulis = async (req, res) => {
  const { id } = req.params;
  await Penulis.destroy({ where: { id } });
  return res.redirect("/penulis");
};
export const getPenulisById = async (req, res) => {
  const { id } = req.params;
  const dataPenulis = await Penulis.findOne({ where: { id } });
  return res.render("detailPenulis.ejs", { dataPenulis });
};
export const putPenulisById = async (req, res) => {
  const idparams = req.params.id;
  const { id, nama } = req.body;
  await Penulis.update({ id, nama }, { where: { id: idparams } });
  return res.redirect("/penulis");
};
