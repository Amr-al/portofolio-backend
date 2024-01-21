"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skillController_1 = require("../controller/skillController");
const router = require("express").Router();
const upload = require("../utils/multer");
router.get("/", skillController_1.getSkills);
router.post("/", upload.single("file"), skillController_1.addSkill);
module.exports = router;
