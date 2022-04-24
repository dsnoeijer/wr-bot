var express = require("express");
var path = require("path");
var routes = require("./routes");
var app = express();
var cloudinary = require('cloudinary');

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);

cloudinary.config({
    cloud_name: 'db3rmcxpe',
    api_key: '233225827957795',
    api_secret: 'bi9yeGJsctS8x7NBSjA7ZVfecyo'
});

app.listen(app.get("port"), () => {
    console.log("Server started on port " + app.get("port"));
}); 0

