import { Router } from "express";
import { getOneProduct, getProducts } from "../controllers/products.controller.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";

const router = Router()

router.get('/products', getProducts )

router.get('/products/:id', getOneProduct)

router.delete('/product/:id', validateUser)


export default router