import { Router } from "express";
import { getProducts } from "../controllers/products.controller.js";

const router = Router()

router.get('/products', getProducts )

router.get('/products/:id')


export default router