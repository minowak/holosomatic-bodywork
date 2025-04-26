import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export const sendEmail = (to: string, subject: string, message: string) => {
  resend.emails.send({
    from: "holosomatic.bodywork@yuliiapinchuk.com",
    to: to,
    subject: subject,
    html: message,
  });
};
