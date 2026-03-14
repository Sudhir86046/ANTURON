const express = require("express");
const router = express.Router();
const { createDemoRequest } = require("../controllers/demoController");

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Demo route working",
  });
});

router.post("/", createDemoRequest);

module.exports = router;