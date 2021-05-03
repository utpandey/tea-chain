import nodemailer, { TransportOptions } from 'nodemailer';
import { google } from 'googleapis';
import logger from '../config/logger';
import serverConfig from '../config';

const generateGoogleAccessToken = async () => {
  const oAuth2Client = new google.auth.OAuth2(
    serverConfig.clientID, serverConfig.clientSecret, serverConfig.redirectURL,
  );
  oAuth2Client.setCredentials({ refresh_token: serverConfig.refreshToken });
  const accessToken = await oAuth2Client.getAccessToken();
  return accessToken;
};

const sendEmail = async (to: string, subject: string, template: string) => {
  const accessToken = await generateGoogleAccessToken;
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OaUTH2',
      user: 'legionc302@gmail.com',
      clientId: serverConfig.clientID,
      clientSecret: serverConfig.clientSecret,
      refreshToken: serverConfig.refreshToken,
      accessToken,
    },
  } as TransportOptions);

  let userTemplate;
  let textTemplate;

  if (template === 'Registration') {
    userTemplate = '<h1>Registration</h1>';
    textTemplate = '<h1>Registration</h1>';
  } else if (template === 'Welcome') {
    userTemplate = '<h1>Welcome</h1>';
    textTemplate = '<h1>Welcome</h1>';
  } else if (template === 'Forgot Password') {
    userTemplate = '<h1>Forgot Password</h1>';
    textTemplate = '<h1>Forgot Password</h1>';
  } else {
    userTemplate = '<h1>Default Template</h1>';
    textTemplate = '<h1>Default Template</h1>';
  }

  try {
    const info = await transporter.sendMail({
      from: '"NodeMailer Contact" <test@teachaintest.com>',
      to,
      subject,
      text: textTemplate,
      html: userTemplate,
    });
    logger.info('EMAIL', 'sendEmail', info);
  } catch (err) {
    logger.error('EMAIL', 'sendEmail', err);
  }
};

export default { sendEmail };
