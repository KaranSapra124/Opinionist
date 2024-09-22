const express = require("express");
const cors = require("cors");
const app = express();
const dbConfig = require("./Utils/dbConfig");
const compression = require("compression");
const Router = require("./Routes/userRoutes");
app.use(compression());
require("dotenv").config();
dbConfig();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/user", Router);

app.listen(3000, () => console.log("Server Running!"));
