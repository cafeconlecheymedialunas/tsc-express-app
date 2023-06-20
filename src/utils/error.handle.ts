import { Response } from "express";

const handleHttp = (res: Response, message: string, error?: any) => {
    res.status(500)
    res.send({ error })
    console.log(error)

}
export { handleHttp }
