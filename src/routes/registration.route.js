import { Router } from "express";
import { postRegistration } from "../controllers/registration.controller.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";

const router = Router()

router.post('/registration', validateUser, postRegistration )


export default router