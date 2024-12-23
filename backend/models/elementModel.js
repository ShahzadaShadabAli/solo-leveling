import mongoose from "mongoose";

const elementSchema = mongoose.Schema({
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

const Element = mongoose.model('Element', elementSchema)
export default Element