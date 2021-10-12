require("dotenv").config();
const Router = require("./routes/productRoutes");
const express = require("express");
const connectDb = require("./config/db");
const cors=require('cors')
connectDb();

const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/products", Router);

const HOST = process.env.HOST;
const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log(`server running on port ${HOST}:${Port}`));
