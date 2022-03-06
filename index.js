// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const indexingApi = require("./function");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Indexing API" });
});

app.post("/result", function (req, res) {
  indexingApi.indexingApi(req.body.data, (data) => {
    res.render("result", { data: data });
  });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
