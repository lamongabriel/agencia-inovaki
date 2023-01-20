import { createTransport } from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transport = createTransport({
  host: 'mail.inovaki.com.br',
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
