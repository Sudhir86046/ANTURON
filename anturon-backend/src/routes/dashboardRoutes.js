const express = require("express");
const router = express.Router();
const { createDashboardRequest } = require("../controllers/dashboardController");

router.post("/", createDashboardRequest);

module.exports = router;