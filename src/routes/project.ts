import { Request, Response } from "express";
import { addProject, getProjectById, getProjects } from "../controller/project.js";
const router = require("express").Router();
const upload = require('../utils/multer')

router.get("/:id", getProjectById);
router.get("/", getProjects);
router.post("/", upload.array('files'), addProject);
module.exports = router;
