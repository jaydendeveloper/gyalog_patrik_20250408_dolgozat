import express, { json } from "express";
import { router } from "./routes/router.js";

const app = express();

app.use(json());

app.use(router);

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
