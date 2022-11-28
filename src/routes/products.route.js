import { Router } from "express";
import { deleteProduct, getOneProduct, getProducts } from "../controllers/products.controller.js";
import { validateProduct } from "../Middlewares/validateProduct.middleware.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";

const router = Router()

router.get('/products', getProducts )

router.get('/products/:id', getOneProduct)

router.delete('/products/:id', validateUser, validateProduct, deleteProduct)


export default router