const express = require("express");
const User = require("../backend/models/Users")
const bcrypt = require('bcrypt');
const authRoute = require("../backend/routes/auth")
const cors = require('cors');

const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection successfull"))
.catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());

app.use("/CityVille", authRoute);
app.listen(process.env.PORT, () =>{
    console.log("server is running");
});

