import mongoose from "mongoose";

const stageModel = mongoose.Schema({
    name: {
        type: Number,
        required: true
    },
    enemies: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }],
    xp: {
        type: Number,
        required: true
    },
    playerXp: {
        type: Number,
        required: true 
    },
    award: {
        type: mongoose.Schema.Types.ObjectId,
    },
    gold: Number, 
    chu: Number 
})