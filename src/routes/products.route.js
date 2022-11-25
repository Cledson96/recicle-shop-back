import { Router } from "express";
import { getProducts } from "../controllers/products.controller.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";

const router = Router()

router.get('/products', validateUser, getProducts )


export default router