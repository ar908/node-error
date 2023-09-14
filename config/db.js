const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/testdatabase").then(() => {
    console.log("connetction succesfull")
}).catch((e) => {
    console.log(e);
})


// mongoose.connect('mongodb+srv://Artipatwa:Arti@123@cluster0.bqb6tuo.mongodb.net/test').then(() => {
//     console.log("connection successfull");
// });