import express from "express";
import {
  signup,
  login,
  logout,
  checkAuth,
  verifyEmail,
  forgetPassword,
  resetPassword,
} from "../controllers/user.controller.js";
import { protectedRoute } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/logout", logout);
userRouter.get("/checkAuth", protectedRoute, checkAuth);
userRouter.post("/verifyemail", verifyEmail);
userRouter.post("/forgetpassword", forgetPassword);
userRouter.post("/resetpassword/:token", resetPassword);

export { userRouter };
