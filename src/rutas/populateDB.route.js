const { Router } = require("express");

const { populateDB } = require("../controladores/populateDB.controller");

const router = Router();

router.get("/", populateDB);

module.exports = router;
