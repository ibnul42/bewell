const express = require("express");
const router = express.Router();
const {
  registerUser,
  LoginUser,
  getMe,
  updateProfile,
  updatePassword,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", LoginUser);
router.get("/me", protect, getMe);
router.post("/me/update", protect, updateProfile);
router.post("/me/update-password", protect, updatePassword);

module.exports = router;
