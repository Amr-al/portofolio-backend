"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailsController_1 = require("../controller/mailsController");
const router = require("express").Router();
router.post("/", mailsController_1.send);
module.exports = router;
