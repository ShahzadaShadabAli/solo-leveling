import Arena from "../models/arenaModel.js"

export const getArena = async (req, res) => {
    try {
        const arenas = await Arena.find({}).populate('winning_award')
        res.status(200).json(arenas)
    } catch (error) {
        res.status(400).json({message: "Unable to fetch arenas", message: error.message})
    }
}