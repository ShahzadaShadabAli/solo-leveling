import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js"
import userRouter from "./routers/userRouter.js"
import arenaRouter from "./routers/arenaRouter.js"
import characterRouter from "./routers/characterRouter.js"
import typeRouter from "./routers/typeRouter.js"
import elementRouter from "./routers/elementRouter.js"
import userCharacterRouter from "./routers/userCharacterRouter.js"
import cookieParser from "cookie-parser"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
connectDB()

app.use('/user', userRouter)
app.use('/arena', arenaRouter)
app.use('/character', characterRouter)
app.use('/type', typeRouter)
app.use('/element', elementRouter)
app.use('/userCharacter', userCharacterRouter)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Successfully running on Port: ${PORT}`);
});