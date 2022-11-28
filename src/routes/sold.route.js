import { Router } from "express";
import {solds} from "../controllers/sold.controllers.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";

  const router = Router();

  router.post("/sold", validateUser, solds);

  export default router;