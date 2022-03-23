require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require('./router.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// JSON!
app.use(express.json());

// use router
app.use(router); //

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
