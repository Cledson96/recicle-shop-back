import { Router } from "express";
import { postShopping_cart } from "../controllers/shopping_cart.controller.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";

const router = Router()

router.post('/shopping_cart', validateUser, postShopping_cart )


export default router