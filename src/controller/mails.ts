import { sendMail } from "../utils/mails";

let validateEmail = function (email: string) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

export const send = async (req: any, res: any) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json(" all fields are required  ");
    if (!validateEmail(email)) return res.status(400).json("wrong email");
    sendMail("contact request", ` <b> ${message} </b> `, email);
    return res.status(200).json("message sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("something went wrong");
  }
};
