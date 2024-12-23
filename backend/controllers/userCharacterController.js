import Character from "../models/characterModel.js"
import UserCharacter from "../models/userCharacterModel.js"

export const getCharacter = async (req, res) => {
    try {
        const characters = await UserCharacter.find({user: req.user._id}).populate("element").populate("type")
        console.log(characters)
        res.status(200).json(characters)
    } catch (error) {
        res.status(400).json({message: error.message})
    }    
}

export const getCharNum = async (req, res) => {
    try {
        const totalChar = await Character.countDocuments()
        const attainedChar = await UserCharacter.find({user: req.user._id}).countDocuments()
        res.status(200).json({totalChar, attainedChar})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}