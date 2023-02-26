const express = require("express");
const app = express();
const db = require("./config/db");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });

const route=require("./routes/userRagister")
db()
app.use(cors());
app.use(express.json());

app.use("/",route)

app.listen(process.env.PORT || 5000, () =>
  console.log(` ${process.env.PORT}!`)
);
