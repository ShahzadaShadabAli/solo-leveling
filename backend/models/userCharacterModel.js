import mongoose from "mongoose";

const userCharacterSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    front_img: {
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
    
    dateCreated: {
        type: Date,
        default: Date.now
    },
})

const UserCharacter = mongoose.model('UserCharacter', userCharacterSchema)
export default UserCharacter