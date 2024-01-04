"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection_js_1 = require("./utils/connection.js");
app.use(express.json());
app.use(cors({}));
(0, connection_js_1.conf)();
const projectRoutes = require("./routes/project");
const skillRoutes = require("./routes/skills");
const messageRoutes = require("./routes/messages");
app.use("/projects", projectRoutes);
app.use("/skills", skillRoutes);
app.use("/message", messageRoutes);
app.listen(5000, () => {
    console.log("App listening on port 5000");
});
