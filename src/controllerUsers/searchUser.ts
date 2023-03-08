import { Request, Response } from "express";
import { prismaClient } from "../model/prismaClient";
export class searchUser {
  async searchUser(req: Request, res: Response) {
    const email: string = req.query.email as string;
    const user = await prismaClient.users.findMany({
      where: {
        email: email,
      },
    });
    return user
      ? res.status(200).json(user)
      : res.status(200).json("Selected coment does not exist");
  }
}
