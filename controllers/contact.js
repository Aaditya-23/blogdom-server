import nodemailer from "nodemailer";

export const ContactUs = async (req, res) => {
  try {
    const { email, text } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.RECIEVER_EMAIL,
      subject: "Blogdom contact",
      text: `
      mail: ${email}

      ${text}
      `,
    };

    const Success = await transporter
      .sendMail(mailOptions)
      .then(() => true)
      .catch(() => false);

    if (!Success) throw "nodemailer error";

    return res.status(201).json({ message: "Received" });
  } catch (error) {
    console.log("Error in contact us controller", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
