require("dotenv").config();

const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_KEY,
    },
  });

  const mailStructure = {
    from: email,
    to: process.env.EMAIL,
    subject: `New Message from: ${name}`,
    text: message,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailStructure);
    res.status(200).json({ status: true, message: "Mail Sent sussessfully✅" });
    console.log("Mail Sent sussessfully✅");
  } catch (e) {
    res.status(500).send({ status: false, message: "Error Sending Mail❌" });
    console.log("Error Sending Mail❌:", e);
  }
};
