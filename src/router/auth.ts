import { Router } from "express";
import auth, { signup } from "../controller/auth";

const authRoutes = Router();

authRoutes.get("/login", auth);
authRoutes.post("/signup", signup);

export default authRoutes;
