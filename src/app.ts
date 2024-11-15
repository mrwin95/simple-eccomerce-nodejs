import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// Routes

app.get("/", (req, res) => {
  const strCompress = "Hello World";

  res
    .status(200)
    .json({ message: "Welcome", metadata: strCompress.repeat(1000) });
});
// Error handling

export default app;
