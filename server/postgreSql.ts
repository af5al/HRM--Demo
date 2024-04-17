import { Sequelize } from "sequelize";
const connection = async () => {
  // Passing parameters separately (other dialects)
  const sequelize = new Sequelize("sample", "postgres", "6Af@afsal123", {
    host: "localhost",
    dialect: "postgres",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connection;
