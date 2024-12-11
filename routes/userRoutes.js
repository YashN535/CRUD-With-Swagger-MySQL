//Express Router For User-Releated Routes

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Define API Endpoints For User Operation

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
