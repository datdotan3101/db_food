import express from "express";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "mysql://root:1234@localhost:3307/db_2_sequelize"
);
const app = express();

app.use(express.json());

app.get("/demo", (req, res, next) => {
  res.json("hello");
});

try {
  await sequelize.authenticate();
  console.log("SEQUELIZE: Connection has been established successfully.");
} catch (error) {
  console.error("SEQUELIZE: Unable to connect to the database:", error);
}

app.listen(3069, () => {
  console.log(`Example app listening on port http://localhost:3069`);
});
