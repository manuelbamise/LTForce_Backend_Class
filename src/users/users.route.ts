import { Router } from "express";
import { UsersController } from "./users.controller.js";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get("/", (req, res) => usersController.getUsers(req, res));

export default usersRouter;
