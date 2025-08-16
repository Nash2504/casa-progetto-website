import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, tel, email } = req.body;

  if (!name || !tel || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Casa Progetto Website" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `📩 New Quotation Request from ${name}`,
      text: `
        A new member has requested a quotation.

        Name: ${name}
        Phone: ${tel}
        Email: ${email}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f5f7f9; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
            
            <!-- Header -->
            <div style="background-color: #304A2A; padding: 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Casa Progetto</h1>
              <p style="color: #d9f9d9; margin: 0; font-size: 16px;">New Quotation Request</p>
            </div>
            
            <!-- Body -->
            <div style="padding: 20px; color: #333;">
              <p style="font-size: 16px; margin-bottom: 15px;">
                A <strong>new member</strong> has requested a quotation from your website.
              </p>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
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

              <p style="font-size: 14px; color: #666;">
                Please contact the member at your earliest convenience to provide the requested quotation.
              </p>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #555;">
              © 2025 Casa Progetto · This is an automated notification
            </div>
          </div>
        </div>
      `
    });

    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
