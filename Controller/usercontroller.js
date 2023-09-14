// const User = require("../Modal/usermodel")
const User = require("../Modal/usermodel")

exports.register = async (req, res) => {
    // res.send("this response from controller")

    try {
        const { name, email, password } = req.body;
        if (!email || !name || !password) {
            return res.status(400).send({ message: "please filled your filled" })
        }

    } catch (error) {

    }
}