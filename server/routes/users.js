const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UsersController");

const controller = new UsersController();

/* GET users listing. */
router.get("/:id", controller.getUser);

module.exports = router;
