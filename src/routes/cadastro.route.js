import { Router } from "express";
import {cadastro} from "../controllers/cadastro.controller.js";

  const router = Router();

  router.post("/cadastro", cadastro);

  export default router;