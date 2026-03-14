const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});

const sendDashboardLeadMail = async ({ name, email, company, phone }) => {
  const mailOptions = {
    from: `"Anturon Website" <${process.env.SMTP_MAIL}>`,
    to: process.env.COMPANY_RECEIVER_MAIL,
    subject: "New Dashboard Access Request - Anturon",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Dashboard Access Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendDashboardLeadMail,
};