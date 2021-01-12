require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors");

//My routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")

const app = express();

//DB connections
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log("DB CONNECTED....!");
}).catch(() => {
    console.log("DB GOt OOps");
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api",authRoutes)
app.use("/api",userRoutes)


//PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App is running at :: ${port}`);
});