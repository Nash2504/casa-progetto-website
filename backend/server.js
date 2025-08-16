// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // load .env

const app = express();
app.use(cors());
app.use(express.json());

// POST route to send email
app.post("/send-email", async (req, res) => {
  const { name, tel, email } = req.body;

  if (!name || !tel || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   // your Gmail
        pass: process.env.EMAIL_PASS    // App Password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Casa Progetto Website" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,        // recipient
      subject: `📩 New Quotation Request from ${name}`,
      text: `A new member has requested a quotation.\n\nName: ${name}\nPhone: ${tel}\nEmail: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f5f7f9; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 8px; border: 1px solid #e0e0e0;">
            <div style="background-color: #304A2A; padding: 20px; text-align: center;">
              <h1 style="color: #fff; margin: 0; font-size: 24px;">Casa Progetto</h1>
              <p style="color: #d9f9d9; margin: 0; font-size: 16px;">New Quotation Request</p>
            </div>
            <div style="padding: 20px; color: #333;">
              <p>A <strong>new member</strong> has requested a quotation from your website.</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Name</strong></td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Phone</strong></td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${tel}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Email</strong></td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                </tr>
              </table>
              <p style="font-size: 14px; color: #666;">Please contact the member at your earliest convenience to provide the requested quotation.</p>
            </div>
            <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #555;">
              © 2025 Casa Progetto · This is an automated notification
            </div>
          </div>
        </div>
      `,
    });

    res.json({ message: "Email sent successfully ✅" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
