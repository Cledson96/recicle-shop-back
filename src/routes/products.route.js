import { Router } from "express";
import { getOneProduct, getProducts } from "../controllers/products.controller.js";

const router = Router()

router.get('/products', getProducts )

router.get('/products/:id', getOneProduct)


export default router