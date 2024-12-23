import mongoose from "mongoose";

const typeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

const Type = mongoose.model("Type", typeSchema)

export default Type