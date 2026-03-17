const DashboardRequest = require("../models/DashboardRequest");
const { sendDashboardLeadMail } = require("../utils/sendMail");

const createDashboardRequest = async (req, res) => {
  try {
    const { name, email, company, phone } = req.body;

    if (!name || !email || !company || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newRequest = await DashboardRequest.create({
      name,
      email,
      company,
      phone,
    });

    try {
      await sendDashboardLeadMail({
        name,
        email,
        company,
        phone,
      });
    } catch (mailError) {
      console.log("Mail send error:", mailError.message);
    }

    return res.status(201).json({
      success: true,
      message: "Request submitted successfully",
      data: newRequest,
    });
  } catch (error) {
    console.error("Dashboard request error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createDashboardRequest,
};