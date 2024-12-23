import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import bcrypt from "bcryptjs"


dotenv.config()


const createToken = (id) => {
    const token = jwt.sign({id}, process.env.SECRET, {expiresIn: '1d'})
    return token
}

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gold: {
        type: Number,
        default: 200,
        required: true
    },
    maxGold: {
        type: Number,
        default: 500,
        required: true
    },
    chu: {
        type: Number,
        default: 200,
        required: true
    },
    maxChu: {
        type: Number,
        default: 500,
        required: true
    },
    lvl: {
        type: Number,
        default: 1,
        required: true
    },
    xp: {
        type: Number,
        default: 0,
        required: true
    },
    nextXp: {
        type: Number,
        default: 100,
        required: true
    },
    stage: {
        type: Number,
        default: 1
    }
})

userSchema.statics.login = async function (email, password) {
    const exists = await this.findOne({email})
    if (exists) {
        if (bcrypt.compareSync(password, exists.password)) {
            const token = createToken(exists._id)
            const user = {
                email: exists.email,
                user: exists,
                name: exists.name,
                id: exists._id,
                token
            }
            return user
        } else {
            throw Error("Invalid Password Inserted")
        }
    } else {
        throw Error("Invalid Email Inserted")
    }
}

userSchema.statics.register = async function (name, email, password) {

    const exists = await this.findOne({email})
    if (exists) {
        throw Error("Email Already exists")
    } else {
        const insertUser = await this.create({
            name, 
            email, 
            password: bcrypt.hashSync(password, 10)
        })
        if (insertUser) {
            const token = createToken(insertUser._id)
            const user = {
                id: insertUser._id,
                user: insertUser,
                email,
                name,
                token
            }
            return user
        }
    }
}

const User = mongoose.model("User", userSchema)
export default User;