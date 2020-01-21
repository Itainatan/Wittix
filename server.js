const express = require("express");
const app = express();
var http = require("http").Server(app);
const path = require("path");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const start = require("./routes/api/start");
app.use("/api/start", start);

const end = require("./routes/api/end");
app.use("/api/end", end);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

var server = http.listen(PORT, () => {
  console.log("server is running on port", server.address().port);
});