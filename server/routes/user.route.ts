import express from "express";
import { register, verifyOtp } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/registration", register);
userRouter.post("/verify-otp", verifyOtp);

export default userRouter;
