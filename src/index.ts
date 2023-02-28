import app from "./server"

app.listen(3001, (req, res) => {
  console.log("hello on http://localhost:3001")
})








// const http = require("http")

// // this is vanilla js example, will not be using it in the en
// // if using: // import http from "http"; then will need to add "type": "module" to package.json

// // req is the incoming request, res is the response
// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     // if they are accessing the basic 'home' page from the app
//     // send back a 200 and then close the session
//       res.statusCode(200)
//       res.end()
//   }
// })

// server.listen(3001, () => {
//   console.log("server on http://localhost:3001")
// })


// api is the code that runs on the server
// terms api and server "can" be used interchangeably
// server is "always" running, just doesn't have a visual output
// connected to a UI and connected to other web apps
// servers typically facilitate access to a server
// must operate on a port, a port is typically 4 digits
// ip address gets you to the right location, then the port takes you to the correct web app
// like for google port 80 takes you to the main google search page
// localhost is an alias for 127.0.0.1 which runs on everyone's personal computer

// route is the name of the event
// OPTIONS is a security check done by CORS that helps see if the client is able to actually communicate wtih an API
// 

// route houndler is a function that executes when a certain route is triggered
// so it is the server callback definited on line 7