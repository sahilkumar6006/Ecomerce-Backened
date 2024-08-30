import { Router } from "express";
import authRoutes from "./auth";
import { signup } from "../controller/auth";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRoutes);

export default rootRouter;
