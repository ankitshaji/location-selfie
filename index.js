//server
const express = require("express");
const app = express();
app.listen(3000, () => console.log("listning at 3000"));

//server understands static and json
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.post("/api", (req, res) => {
  console.log("Request received");
  console.log(req.body);
  res.json({
    status: "Success",
    latitude: req.body.lat,
    longitude: req.body.lon,
  });
});
