import TypeModel from "../models/typeModel.js"

export const getType = async (req, res) => {
    try {
        const types = await TypeModel.find()
        res.status(200).json(types)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}