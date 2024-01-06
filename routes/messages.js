"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mails_js_1 = require("../controller/mails.js");
const router = require("express").Router();
router.post("/", mails_js_1.send);
module.exports = router;
