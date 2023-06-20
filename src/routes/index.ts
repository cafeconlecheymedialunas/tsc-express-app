import { Router } from "express";
import { readdirSync } from "fs"
import { HomeController } from "../controllers/home.controller";

const PATH_ROUTER = `${__dirname}`


const router = Router();


const cleanFileName = (fileName: string) => {
    const file = fileName.split(".")
    return file[0];
}
readdirSync(PATH_ROUTER).filter((fileName) => {
    const file = cleanFileName(fileName);
    if (file !== "index") {
        import(`./${file}`).then((module) => {
            router.use(`/${file}`, module.router)
        })

    }
})

router.get("/", HomeController)
export default router