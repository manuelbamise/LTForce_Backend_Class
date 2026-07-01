import express from "express";
import mainRouter from "./router.js";

const app = express();
const PORT = 3300;

app.use("/api", mainRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "Hello from the server!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
