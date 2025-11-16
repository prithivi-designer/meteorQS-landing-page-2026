import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // ✅ Configure Nodemailer for Hostinger SMTP
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.hostinger.com",
    //   // port: 587,
    //   // secure: false, // use true for port 465
    //   auth: {
    //     user: process.env.MAIL_USERNAME || "info@mete.com",
    //     pass: process.env.MAIL_PASSWORD || "eV|[hk96^Jy",
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      authMethod: "LOGIN",
    });

    // ✅ Verify transporter connection (optional but helpful for debugging)
    await transporter.verify();

    // ✅ Email details
    const mailOptions = {
      from: `"${name}" <${process.env.MAIL_USERNAME || "info@mete.com"}>`, // sender must match authenticated domain
      replyTo: email, // user's email
      to: "nimalraj.panneerselvam@gmail.com", // your receiving email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    console.log("📧 Email sent successfully!");
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({
      message: "Failed to send message.",
      error: error.message,
    });
  }
}
