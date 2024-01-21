import { addSkill, getSkills } from "../controller/skillController";
const router = require("express").Router();
const upload = require("../utils/multer");

router.get("/", getSkills);
router.post("/", upload.single("file"), addSkill);
module.exports = router;
