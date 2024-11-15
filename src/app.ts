import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import { checkOverLoad, countConnect } from "./helpers/check.connect";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init dbs
import "./dbs/init.mongodb";
// countConnect(); // open it to see the number of connections
checkOverLoad();
// Routes

app.get("/", (req, res) => {
  const strCompress = "Hello World";

  res
    .status(200)
    .json({ message: "Welcome", metadata: strCompress.repeat(1000) });
});
// Error handling

export default app;
