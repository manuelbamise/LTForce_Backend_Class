import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "Hello from the userRouter" });
});

export default userRouter;
