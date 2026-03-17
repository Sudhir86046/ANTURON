const express = require("express");
const cors = require("cors");

const dashboardRoutes = require("./routes/dashboardRoutes");
const demoRoutes = require("./routes/demoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Anturon backend is running");
});

// ✅ FIXED ROUTES
app.use("/api/v1/dashboard-request", dashboardRoutes);
app.use("/api/v1/demo-request", demoRoutes);

module.exports = app;