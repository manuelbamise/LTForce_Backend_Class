import express, { type Request, type Response } from "express";
import mainRouter from "./main.route.js";

const app = express();
const port = 3300;

app.use(express.json());

app.use("/api", mainRouter);

app.get("/health", (req, res) => {
  return res.json({ message: "server is running well" });
});

app.listen(port, () => {
  console.log("Server listening on port:3300");
});
