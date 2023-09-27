import { NextApiHandler } from "next";
import { sendEmail } from "../../../utils/sendgrid";

const handler: NextApiHandler = async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: "ebbyquincy@gmail.com",
    from: "maduekenonso5@gmail.com",
    subject: "Message from " + name + ". Their Email is " + email,
    html: `${message} <br> <b>Reply should be sent to ${email}</b>`,
  };

  try {
    await sendEmail(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};

export default handler;
