import nodemailer from 'nodemailer';
import logger from '../config/logger';

const sendEmail = async (to: string, subject: string, template: string) => {
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let userTemplate;

  if (template === 'Registration') {
    userTemplate = '<h1>Registration</h1>';
  } else if (template === 'Welcome') {
    userTemplate = '<h1>Welcome</h1>';
  } else if (template === 'Forgot Password') {
    userTemplate = '<h1>Forgot Password</h1>';
  } else {
    userTemplate = '<h1>Default Template</h1>';
  }

  try {
    const info = await transporter.sendMail({
      from: '"NodeMailer Contact" <test@teachaintest.com>',
      to,
      subject,
      html: userTemplate,
    });
    logger.info('EMAIL', 'sendEmail', info);
  } catch (err) {
    logger.error('EMAIL', 'sendEmail', err);
  }
};

export default { sendEmail };
