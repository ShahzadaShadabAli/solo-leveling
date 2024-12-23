import Character from "../models/characterModel.js"

export const getCharacter = async (req, res) => {
    try {
        const characters = await Character.find().populate('type').populate('element')
        res.status(200).json(characters)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

