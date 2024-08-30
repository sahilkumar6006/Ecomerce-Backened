import { Router } from "express";
import auth from "../controller/auth";

const authRoutes = Router();

authRoutes.get("/login", auth);

export default authRoutes;
