import { AuthInterface } from "../interfaces/auth.interface"
import { UserInterface } from "../interfaces/user.interfaces"
import userModel from "../models/user.model"
import { generateToken } from "../utils/jwt.handle"


import { encrypt, verify } from "../utils/password.handle"

const registerService = async (user: UserInterface) => {

    const checkExist = await userModel.findOne({ email: user.email })
    if (checkExist) {
        return "Already exist"
    }
    user.password = await encrypt(user.password)
    const userCreated = await userModel.create(user)
    return userCreated;

}

const loginService = async ({ email, password }: AuthInterface) => {

    const user = await userModel.findOne({ email: email })
    if (!user) return "NOT_FOUND_USER"

    const isCorrect = await verify(password, user.password)

    if (!isCorrect) return "PASSWORD_INCORRECT"

    const token = await generateToken(user.email)

    return { token, user }

}

export { loginService, registerService }