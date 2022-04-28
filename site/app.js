require('dotenv').config();
require('./mdb');
const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const port = process.env.PORT || 3000;
const routes = require('./routes/routes');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is listening`);
});