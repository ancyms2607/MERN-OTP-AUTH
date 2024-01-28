const express = require('express');
const router = express.Router();
const Otp = require('../model/model');
const nodemailer = require('nodemailer');


function generateRandomOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Function to send OTP to email
async function sendOtpToEmail(email, otp) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ancymani9567@gmail.com',
      pass: 'tnsa ynsr afbr fojl'
    }
  });

  let mailOptions = {
    from: 'ancymani9567@gmail.com',
    to: email,
    subject: 'Your OTP',
    text: `Your OTP is ${otp}`
  };

  await transporter.sendMail(mailOptions);
}

router.post('/send', async (req, res) => {
    const { email } = req.body;
    const otp = generateRandomOtp();
    await sendOtpToEmail(email, otp);
  
    const existingOtpDocument = await Otp.findOne({ email });
    if (existingOtpDocument) {
      existingOtpDocument.otp = otp;
      await existingOtpDocument.save();
    } else {
      const otpDocument = new Otp({ email, otp });
      await otpDocument.save();
    }
  
    res.sendStatus(200);
  });
  
router.post('/verify', async (req, res) => {
    const { email, otp } = req.body; 
  
    const otpDocument = await Otp.findOne({ email });
    if (otpDocument && otpDocument.otp === otp) {
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  });
  

module.exports = router;
