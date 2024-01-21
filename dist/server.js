"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan_1 = __importDefault(require("morgan"));
const connection_1 = require("./utils/connection");
const appError_1 = __importDefault(require("./utils/appError"));
const errorController_1 = __importDefault(require("./controller/errorController"));
app.use(express.json());
app.use(cors({}));
app.use((0, morgan_1.default)("dev"));
(0, connection_1.conf)();
const projectRoutes = require("./routes/project");
const skillRoutes = require("./routes/skills");
const messageRoutes = require("./routes/messages");
app.use("/projects", projectRoutes);
app.use("/skills", skillRoutes);
app.use("/message", messageRoutes);
app.all("*", (req, res, next) => {
    next(new appError_1.default(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(errorController_1.default);
exports.default = app;
