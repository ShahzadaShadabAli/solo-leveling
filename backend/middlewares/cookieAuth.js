import jwt from "jsonwebtoken"
import User from "../models/userModels.js"

const cookieAuth = async (req, res, next) => {
    const token = req.cookies.token

    try {
        const user = jwt.verify(token, process.env.SECRET)
        const dbUser = await User.findById(user.id)
        req.user = dbUser
        console.log(req.user._id)
        next()
    } catch (error) {
        console.log(error.message)
        // res.clearCookie("token")
    }
}

export default cookieAuth