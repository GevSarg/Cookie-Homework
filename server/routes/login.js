const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UsersController");

const controller = new UsersController();

router.post("/", controller.loginUser);

module.exports = router;
