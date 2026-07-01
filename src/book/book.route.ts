import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "Hello from the bookRouter" });
});

export default bookRouter;
