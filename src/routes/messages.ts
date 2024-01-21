import { send } from "../controller/mailsController";

const router = require("express").Router();

router.post("/", send);
module.exports = router;
