"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_js_1 = require("../controller/skill.js");
const router = require("express").Router();
const upload = require("../utils/multer");
router.get("/", skill_js_1.getSkills);
router.post("/", upload.single("file"), skill_js_1.addSkill);
module.exports = router;
