import { sendMail } from "../utils/mails";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";
import { NextFunction, Request, Response } from "express";
import { Message } from "../entities/message";
let validateEmail = function (email: string) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

export const send = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return next(new AppError(`all fields are required`, 400));
    if (!validateEmail(email)) return next(new AppError(`wrong email`, 400));
    await Message.create({
      name,
      message,
      email
    }).save()
    sendMail("contact request", ` <b> ${message} </b> `, email);
    return res.status(200).json("message sent successfully");
  }
);
