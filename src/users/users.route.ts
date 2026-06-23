import { Router } from "express";
import { UsersController } from "./users.controller.js";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get("/", (req, res) => usersController.getUsers(req, res));
usersRouter.get("/mark", (req, res) =>
  usersController.getUserForMark(req, res),
);
usersRouter.post("/genderize", (req, res) =>
  usersController.queryGenderizeApi(req, res),
);

export default usersRouter;
