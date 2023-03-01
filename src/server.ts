import express from "express" // typescript lets us use import vs require
import router from "./router"
import morgan from "morgan"

const app = express() // doesn't do anything yet, but makes the api
// const port = 5000;
// const path = require("path");
// app.use(express.static("static"));

// he talked about cors in Creating a Custom Middleware
// cors is a type of middleware

// order matters so we want this to come before routes
// use: global for the entire app, so everything has to go through morgan
// morgan logs, this is middleware
app.use(morgan("dev"))
// another middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// this is basic set up for custom middleware to get understanding of what happens
app.use((req, res, next) => {
  // routes should have access to this secret. in router.ts if we send back req.secret as value for message, 
  // will see "secret hello" in browswer
  // order matters, this is happening first and then the routes are happening
  req.secret = "secret hello"
  next() // go to next item on the call stack
  // it is common to go to next item, but can end it if needed
})

app.get("/", (req, res) => {
  console.log("hello from express")
  res.status(200)
  res.json({"message": "hello"})
})

// apply some type of configuration 
// so for everything that has api in it, we will use the router
// so /api is mounted before any routes in router
// so it would be: .../api/product/ 
app.use("/api", router)

export default app

// OTHER EXAMPLES
// app.get("/", (req, res) => {
//   // sending back an HTML file that a browser can render on the screen.
//   res.sendFile(path.resolve("pages/index.html"));
// });

// // creates and starts a server for our API on a defined port
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });