const express = require("express")

const app = express() // doesn't do anything yet, but makes the api
// const port = 5000;
// const path = require("path");
// app.use(express.static("static"));

app.get("/", (req, res) => {
  console.log("hello from express")
  res.status(200)
  res.json({"message": "hello"})
})

module.exports = app

// OTHER EXAMPLES
// app.get("/", (req, res) => {
//   // sending back an HTML file that a browser can render on the screen.
//   res.sendFile(path.resolve("pages/index.html"));
// });

// // creates and starts a server for our API on a defined port
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });