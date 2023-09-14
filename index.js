const express = require("express");

const app = express();
const port = 5000
const route = require("./Router/route");

require("./config/db");
app.use(route)

app.listen(port, () => {
    console.log(`server listening on port no ${port}`)
})
