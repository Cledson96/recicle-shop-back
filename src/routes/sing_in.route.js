import { Router } from "express";
import {sing_in} from "../controllers/sing_in.controller.js";

  const router = Router();

  router.post("/sing_in", sing_in);

  export default router;