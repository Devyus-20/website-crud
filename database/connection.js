import db from "./db.js";

const connection = async () => {
  try {
    await db.authenticate;
    console.log("database terhubung");
  } catch (error) {
    console.log(error);
  }
};

export default connection;
