import Character from "../models/characterModel.js"
import UserCharacter from "../models/userCharacterModel.js"
import User from "../models/userModels.js"

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.login(email, password)
        res.cookie('token', user.token, {
            httpOnly: true,
            maxAge: 86400000
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        const user = await User.register(name,email,password)
        res.cookie('token', user.token, {
            httpOnly: true,
            maxAge: 86400000
        })
        const characters = await Character.find({given: true})
        characters.forEach(async (c) => {
            const makeRecords = new UserCharacter({
                user: user.id,
                name: c.name,
                rank: c.rank,
                desc: c.desc,
                maxHealth: c.maxHealth,
                health: c.health,
                maxChu: c.maxChu,
                chu: c.chu,
                power: c.power,
                maxXp: c.maxXp,
                xp: c.xp,
                lvl: c.lvl,
                type: c.type,
                element: c.element,
                front_img: c.front_img,
                img: c.img
            })
            console.log(c)
           await makeRecords.save()
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}