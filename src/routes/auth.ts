import { Router } from "express";
import { registerController, loginController } from "../controllers/auth";

/**
 * * http//localhost:3000/auth/register [POST]

*/
const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);

export { router };
