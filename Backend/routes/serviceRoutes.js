const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const {
  addService,
  getServices,
} = require("../controllers/serviceController");

// POST service (with image)
router.post("/", upload.single("image"), addService);

// GET all services
router.get("/", getServices);

module.exports = router;
