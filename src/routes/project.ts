import { addProject, getProjectById, getProjects } from "../controller/projectController";
const router = require("express").Router();
const upload = require('../utils/multer')

router.get("/:id", getProjectById);
router.get("/", getProjects);
router.post("/", upload.array('files'), addProject);
module.exports = router;
