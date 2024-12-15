require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken, {
  lazyLoading: true,
});

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { phone_number } = req.body;

    try {
      await client.verify._v2
        ?.services(process.env.TWILIO_SERVICE_SID!)
        .verifications.create({
          channel: "sms",
          to: phone_number,
        });
    } catch (error) {
      console.log(error);
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
