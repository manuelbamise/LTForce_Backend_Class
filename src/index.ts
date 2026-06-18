import express, { type Request, type Response } from "express";
import mainRouter from "./main.route.js";

const app = express();
const port = 3300;

app.use(express.json());

app.use("/api", mainRouter);

app.get("/health", (req, res) => {
  return res.send("server is running well");
});

app.post("/test_send", (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send("name is required");
  }

  return res.send(`Hello ${name}`);
});

app.listen(port, () => {
  console.log("Server listening on port:3300");
});
