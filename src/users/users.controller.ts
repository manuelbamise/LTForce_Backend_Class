import type { Request, Response } from "express";
import { UsersService } from "./users.service.js";

export class UsersController {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await this.usersService.getUsers();

      if (!users) {
        throw new Error("No users found");
      }

      res.json({ status: "success", data: users });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  }

  async getUserbyID(req: Request, res: Response) {
    const { id } = req.params;

    // const user = await this.usersService.
  }

  async getUserForMark(req: Request, res: Response) {
    const data = await this.usersService.getDataForMark();

    res.status(200).json({ status: "success", data });
  }

  async queryGenderizeApi(req: Request, res: Response) {
    const { name } = req.body;

    const data = await this.usersService.queryGenderizeApi(name);

    res.status(200).json({ status: "success", data });
  }
}
