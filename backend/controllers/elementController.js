import ElementModel from "../models/elementModel.js"

export const getElement = async (req, res) => {
    try {
        const elements = await ElementModel.find()
        res.status(200).json(elements)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}