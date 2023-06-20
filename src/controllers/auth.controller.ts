import { Request, Response } from "express"
import { registerService, loginService } from "../services/auth.service"
import { handleHttp } from "../utils/error.handle"

const registerAuthController = async (req: Request, res: Response) => {


    const { body } = req
    const registeredUser = await registerService(body)
    res.send(registeredUser);
}
const loginAuthController = async (req: Request, res: Response) => {

    const { body } = req
    const { email, password } = body
    const response = await loginService({ email, password })

    if (response === "PASSWORD_INCORRECT") {
        res.status(403)
        res.send(response)
    }
    res.send(response)





}

export { loginAuthController, registerAuthController }