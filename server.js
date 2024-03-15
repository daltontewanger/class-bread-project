const express = require("express");
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require("dotenv").config();
const breadRoutes = require("./controllers/bread");
const seedRoutes = require("./controllers/bread_seed");

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
app.use("/bread", seedRoutes);

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`listening on port ${PORT}`));
