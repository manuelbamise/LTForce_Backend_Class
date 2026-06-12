import { Router } from "express";
import usersRouter from "./users/users.route.js";

const mainRouter = Router();

mainRouter.get("/status", (req, res) => {
  res.json({ status: "success", message: "this is from the base route" });
});

mainRouter.use("/users", usersRouter);

export default mainRouter;
