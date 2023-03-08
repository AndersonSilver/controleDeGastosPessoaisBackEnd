import { Request, Response } from "express";
import { prismaClient } from "../model/prismaClient";

export class createUsers {
  async createUsers(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const getEmail = await prismaClient.users.findMany({
        where: {
          email: email,
        },
      });

      if(getEmail.length === 0){

        const users = await prismaClient.users.create({
          data: {
            name,
            email,
            password,
          },
        });
  
        return res.status(201).json(users);

      } else {
        return res.status(409).json({ message: "Email Already exists!" });
      }

    } catch (error) {
      console.log(error);
      return res.status(404).json("insertion error!");
    }
  }
}
