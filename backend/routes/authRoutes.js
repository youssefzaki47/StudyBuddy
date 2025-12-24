const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  addFavorite,
  getFavorites
} = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/favorites", protect, addFavorite);
router.get("/favorites", protect, getFavorites);

module.exports = router;
