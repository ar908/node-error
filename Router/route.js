const { register } = require("../Controller/usercontroller");

const route = require("express").Router();

// route.get("/", (req, res) => {
//     res.send("requested send properly")
// })

route.post("/register", register)

module.exports = route;

// const add =[]

// const item = new add()
// {
//     add.map((item, index) => ((
//         <li key={index}>{item}</li>
//     )))
// }