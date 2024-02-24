const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
require('./models/DBconnected')

// importing routes
const user = require("./routes/User_r");
const post = require("./routes/post_r");
const file = require("./routes/file_r");

// file upload
global._basedir = __dirname

// configuration of dotenv
dotenv.config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api/user", user);
app.use("/api/post", post);
app.use("/api/file", file);


app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})