require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
import morgan from "morgan";
import { conf } from "./utils/connection";
import AppError from "./utils/appError";
import globalErrorHandler from "./controller/errorController";

app.use(express.json());
app.use(cors({}));
app.use(morgan("dev"))
conf();

const projectRoutes = require("./routes/project");
const skillRoutes = require("./routes/skills");
const messageRoutes = require("./routes/messages");

app.use("/projects", projectRoutes);
app.use("/skills", skillRoutes);
app.use("/message", messageRoutes);

app.all("*", (req: any, res: any, next: any) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`,404))
});
app.use(globalErrorHandler);

export default app;
