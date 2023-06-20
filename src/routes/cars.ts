import { Router, Request, Response } from "express";
import { getCarController, getCarsController, insertCarController, updateCarController, deleteCarController } from "../controllers/cars.controller";
import { logMiddleware } from "../middelwares/log";
import { checkJwt } from "../middelwares/session";

const router = Router();

router.get("/", checkJwt, getCarsController)
router.get("/:id", checkJwt, logMiddleware, getCarController)
router.post("/", checkJwt, insertCarController)
router.put("/:id", checkJwt, updateCarController)
router.delete("/:id", checkJwt, deleteCarController)
export { router }