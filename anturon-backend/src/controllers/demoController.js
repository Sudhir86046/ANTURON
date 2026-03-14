const DemoRequest = require("../models/DemoRequest");

const createDemoRequest = async (req, res) => {
  try {
    console.log("Demo request body:", req.body);

    const { name, email, company, phone, message } = req.body;

    if (!name || !email || !company || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email, company and phone are required",
      });
    }

    const newDemoRequest = await DemoRequest.create({
      name,
      email,
      company,
      phone,
      message,
    });

    console.log("Demo request saved:", newDemoRequest);

    return res.status(201).json({
      success: true,
      message: "Demo request submitted successfully",
      data: newDemoRequest,
    });
  } catch (error) {
    console.log("Demo controller error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createDemoRequest,
};