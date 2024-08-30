import express, { Express, Request, Response } from "express";
import { PORT } from "./screts";
import rootRouter from "./router/index";
// import { PrismaClient } from "../node_modules/.prisma/client/default";

const app: Express = express();
app.use(express.json());
app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
