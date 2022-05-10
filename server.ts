import dotenv from "dotenv";

dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require("mysql");
const pool = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ID,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

app.get("/api/pokemon", (req: any, res: any) => {
  pool.query("SELECT * FROM pokemon", (err: any, rows: any, fields: any) => {
    res.send({ code: "0", data: rows });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
