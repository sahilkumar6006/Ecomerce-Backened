// import { prismaClient } from "./../server";
import { Request, Response } from "express";

export const auth = (req: Request, res: Response) => {
  res.send("login works");
};

export const signup = async (req: Request, res: Response) => {
  res.send("hello signup");
  //   const { email, password, name } = req.body;

  //   let user = await prismaClient.user.findUnique({ where: { email } });
  //   if (user) {
  //     throw Error("User already exist");
  //   }
  //   user = await prismaClient.user.create({
  //     data: {
  //         email,
  //         password
  //         name,
  //   });
};

export const Login = async (req: Request, res: Response) => {
  res.send("Hello from Login");
  //   const { email, password } = req.body;
  //   const { email, password, name } = req.body;
  //   let user = await prismaClient.user.findUnique({ where: { email } });
  //   if (user) {
  //     throw Error("User already exist");
  //   }
  // if(!compareSync(password, user.password) {
  // throw Error ('Incorrect password')
  //   }
  //   const token = jwt.sign({
  //     id: user.id,
  //     email: user.email,
  //   });
  //   user = await prismaClient.user.create({
  //     data: {
  //         email,
  //         password
  //         name,
  //   });

  //   res.json({ user: json });
};

export default auth;
