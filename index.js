// const express = require("express");
// var path = require('path')
// const app = express();
// const server = require("http").createServer(app);


// app.use(express.static(__dirname + "/../client"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/../index.html");
// });

// server.listen(3000);
const express = require("express");
const app = express();

app.use("/client", express.static(__dirname + "/client"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(3000, () => {
  console.log("The server is up and running!");
});


