import { send } from "../controller/mails";

const router = require("express").Router();

router.post("/", send);
module.exports = router;
