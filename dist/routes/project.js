"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projectController_1 = require("../controller/projectController");
const router = require("express").Router();
const upload = require('../utils/multer');
router.get("/:id", projectController_1.getProjectById);
router.get("/", projectController_1.getProjects);
router.post("/", upload.array('files'), projectController_1.addProject);
module.exports = router;
