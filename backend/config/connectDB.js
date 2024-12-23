import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI)
    if (conn) {
        console.log("Database connected successfully")
    }
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB;