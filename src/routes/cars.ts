import { Router, Request, Response } from "express";
import { getCarController, getCarsController, insertCarController, updateCarController, deleteCarController } from "../controllers/cars.controller";

const router = Router();

router.get("/", getCarsController)
router.get("/:id", getCarController)
router.post("/", insertCarController)
router.put("/:id", updateCarController)
router.delete("/:id", deleteCarController)
export { router }