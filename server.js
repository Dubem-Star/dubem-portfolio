require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

app.post("/contact", async (req, res) => {
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
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
