const {Router} = require("express");
const controllerGmail = require("../controller/controllerGmail")

const router = new Router();

router.post("/sendMainl", controllerGmail.sendMail)

module.exports = router;