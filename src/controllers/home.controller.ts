import { Request, Response } from "express";

const HomeController = async ({ params }: Request, res: Response) => {
    res.send("Home")
};






export { HomeController };