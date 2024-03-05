const express = require("express");
require("dotenv").config();
const breadRoutes = require('./controllers/bread')

const app = express();

// middlewares

// routes
app.use('/bread', breadRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))