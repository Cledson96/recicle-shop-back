import { Router } from "express";
import {delete_cart} from "../controllers/delete_cart.controllers.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";

  const router = Router();

  router.delete("/delete_cart", validateUser, delete_cart);

  export default router;