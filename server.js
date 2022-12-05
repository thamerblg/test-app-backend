const express = require("express");
const cors = require("cors");
const connectDB = require("./connectDB");

require("dotenv").config();

var app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//CONNECT TO THE DATABASE
connectDB();

//Routes
app.use("/products", require("./routes/productRoutes"));
app.use("/clients", require("./routes/clientRoutes"));

const PORT = process.env.PORT;
//Settings
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
