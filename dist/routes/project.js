"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const project_js_1 = require("../controller/project.js");
const router = require("express").Router();
const upload = require('../utils/multer');
router.get("/:id", project_js_1.getProjectById);
router.get("/", project_js_1.getProjects);
router.post("/", upload.array('files'), project_js_1.addProject);
module.exports = router;
