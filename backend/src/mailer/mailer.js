import nodemailer from "nodemailer";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./template.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    let transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOptions = {
      from: "test@test.com",
      to: email,
      subject: "Verfiy your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    };

    const response = await transport.sendMail(mailOptions);
  } catch (error) {
    throw new Error(error);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    let transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOptions = {
      from: "test@test.com",
      to: email,
      text: `Hello ${name},\n\nWelcome to AuthX! We're excited to have you on board.`,
      html: `<p>Hello <strong>${name}</strong>,</p><p>Welcome to <strong>AuthX</strong>! We're excited to have you on board.</p>`,
    };
    const response = await transport.sendMail(mailOptions);
  } catch (error) {
    throw new Error(error);
  }
};

export const sendResetPasswordEmail = async (email, resetUrl) => {
  try {
    let transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOptions = {
      from: "test@test.com",
      to: email,
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
    };
    const response = await transport.sendMail(mailOptions);
  } catch (error) {
    throw new Error(error);
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    let transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOptions = {
      from: "test@test.com",
      to: email,
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    };
    const response = await transport.sendMail(mailOptions);
  } catch (error) {
    throw new Error(error);
  }
};
