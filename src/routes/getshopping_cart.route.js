import { Router } from "express";
import { getShopping_cart } from "../controllers/getShopping_cart.controller.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";

const router = Router()

router.get('/shopping_cart', validateUser,getShopping_cart )


export default router