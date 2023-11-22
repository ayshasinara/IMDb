require("dotenv").config()
const express = require("express");
const dbConnect = require("./dbConnect")
const movieRoutes = require("./routes/movies")
//const cros =require("cros");
const app = express();
//app.use(cros());
app.use(express.json());
dbConnect()
app.use("/api", movieRoutes)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log((`Listening on port ${port}...`)))