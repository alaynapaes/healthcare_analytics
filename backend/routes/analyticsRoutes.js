const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analyticsController");

router.get("/overall", analyticsController.getOverallAdherence);
router.post("/log", analyticsController.addAdherenceLog);
router.get("/by-user", analyticsController.getAdherenceByUser);
router.get("/daily", analyticsController.getDailyAdherence);

module.exports = router;
