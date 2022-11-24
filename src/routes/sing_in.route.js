import { Router } from "express";
import {login} from "../controllers/sing_in.controller.js";

  const router = Router();

  router.post("/login", login);

  export default router;