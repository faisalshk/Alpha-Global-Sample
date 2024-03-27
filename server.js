const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path"); // Import the path module

const app = express();
const port = 3000; // Change the port as needed

app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle form submission
// POST endpoint to handle email sending
app.post("/send-email", (req, res) => {
  const { name, phone, email, interest } = req.body;

  // Create a transporter using nodemailer and your email service provider settings
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "faisalshaikh5656@gmail.com", // Your Gmail email address
      pass: "jqfw fojd tpad elta", // Your Gmail password
    },
  });

  // Email content
  const mailOptions = {
    from: "faisalshaikh5656@gmail.com", // Sender address
    to: "s1062220096@timscdrmumbai.in", // Receiver address
    subject: "New Form Submission for testing", // Email subject
    html: `
      <p>Name: ${name}</p>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Interest: ${interest}</p>
    `, // Email body (HTML)
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
      res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
