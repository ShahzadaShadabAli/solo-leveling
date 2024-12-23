import mongoose from "mongoose";

const characterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    maxHealth: {
        type: Number,
        required: true
    },
    health: {
        type: Number,
        required: true
    },
    maxChu: {
        type: Number,
        required: true
    },
    chu: {
        type: Number,
        required: true
    },
    power: {
        type: Number,
        required: true
    },
    maxXp: {
        type: Number,
        required: true,
        default: 150
    },
    xp: {
        type: Number,
        required: true,
        default: 0
    },
    lvl: {
        type: Number,
        required: true,
        default: 1
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Type",
        required: true
    },
    element: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Element",
        required: true
    },
    given: {
        type: Boolean,
        default: false
    },
    img: {
       type: String,
        required: true
    },
    front_img: {
        type: String,
        required: true
    }
})

const Character = mongoose.model("Character", characterSchema)
export default Character