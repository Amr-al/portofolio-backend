import { send } from "../controller/mails.js";

const router = require("express").Router();

router.post("/", send);
module.exports = router;
