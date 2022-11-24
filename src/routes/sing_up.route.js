import { Router } from "express";
import {sing_up} from "../controllers/sing_up.controller.js";

  const router = Router();

  router.post("/sing_up", sing_up);

  export default router;