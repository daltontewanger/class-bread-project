const express = require("express");
const methodOverride = require('method-override')
require("dotenv").config();
const breadRoutes = require("./controllers/bread");

const app = express();

// middlewares
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public') )
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// routes
app.use("/bread", breadRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`listening on port ${PORT}`));
