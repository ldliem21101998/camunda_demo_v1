import express from "express";
import {
  loginRequest
} from "../controllers/authorization.js";

const router = express.Router();

router.post("/", loginRequest)

export default router;
