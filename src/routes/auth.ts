import { Router, Request, Response } from "express";

import { registerAuthController, loginAuthController } from "../controllers/auth.controller";

const router = Router();

router.post("/register", registerAuthController)
router.post("/login", loginAuthController)
export { router }