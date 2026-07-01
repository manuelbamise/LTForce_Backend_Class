import { Router } from "express";
import userRouter from "./user/user.route.js";
import bookRouter from "./book/book.route.js";

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "Hello from the mainRouter" });
});

mainRouter.use("/users", userRouter);
mainRouter.use("/books", bookRouter);

export default mainRouter;
