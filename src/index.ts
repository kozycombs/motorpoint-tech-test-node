import express, { Express, Request, Response, json, urlencoded } from "express";
import path from "path";
import { config } from "dotenv";
import { createStream } from "rotating-file-stream";
import morgan from "morgan";
import cors from "cors";
import corsOptions from "./config/corsOptions";
import vehicleRouter from "./routes/vehicle.route";
import errorMiddleware from "./middlewares/error";

const app: Express = express();

config(); // Enable access to .env file

const PORT = process.env.PORT || 3500;

//Use custom logger middleware to capture requests in log file
const accessLogStream = createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "logs"),
});

const logFormat = app.get("env") === "production" ? "combined" : "dev";
app.use(morgan(logFormat, { stream: accessLogStream }));

// Enable Cross Origin Resource Sharing to specified origins
app.use(cors(corsOptions));

// parse incoming request with url encoded payload
// extended - true =>
app.use(urlencoded({ extended: true }));

// Parse incoming request with json payload
app.use(json());

// Define routes
app.use("/api/vehicles", vehicleRouter);

app.all("*", (req: Request, res: Response) => {
  console.log("all:", res);
  res.status(404);
  if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});

export default app;
