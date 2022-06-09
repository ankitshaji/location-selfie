//server
//npm install express
//npm install nedb
const Datastore = require("nedb");
const express = require("express");
const app = express();
app.listen(3000, () => console.log("listning at 3000"));

//server understands static and json
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

//create database
const database = new Datastore("database.db");
database.loadDatabase();

//server accepts post requests
app.post("/api", (req, res) => {
  console.log("Request received");
  const timestamp = Date.now();
  req.body.timestamp = timestamp;
  database.insert(req.body);
  res.json({
    status: "Success",
    timestamp: req.body.timestamp,
    latitude: req.body.lat,
    longitude: req.body.lon,
  });
});
