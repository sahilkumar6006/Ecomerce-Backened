import { prismaClient } from "./../server";
import { Request, Response } from "express";
export const auth = (req: Request, res: Response) => {
  res.send("login works");
};

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  let user = await prismaClient.user.findUnique({ where: { email } });
  if (user) {
    throw Error("User already exist");
  }
  user = await prismaClient.user.create({
    data: { email, 
        password: hasSync(password, 10)
        name },
  });
};

export default auth;
