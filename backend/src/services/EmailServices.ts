import nodemailer, { TransportOptions } from 'nodemailer';
import path from 'path';
import handlebars from 'handlebars';
import { promises as fs } from 'fs';
import { google } from 'googleapis';
import logger from '../config/logger';
import serverConfig from '../config';

const NAMESPACE = 'EMAIL';

const generateGoogleAccessToken = async () => {
  const oAuth2Client = new google.auth.OAuth2(
    serverConfig.clientID, serverConfig.clientSecret, serverConfig.redirectURL,
  );
  oAuth2Client.setCredentials({ refresh_token: serverConfig.refreshToken });
  const accessToken = await oAuth2Client.getAccessToken();
  return accessToken;
};

const sendEmail = async (to: string, subject: string, template: string, data: Object = {}) => {
  const accessToken = await generateGoogleAccessToken();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: serverConfig.emailUser,
      clientId: serverConfig.clientID,
      clientSecret: serverConfig.clientSecret,
      refreshToken: serverConfig.refreshToken,
      accessToken,
    },
  } as TransportOptions);

  try {
    let userTemplate;
    let textTemplate;

    if (template === 'Registration') {
      userTemplate = await fs.readFile(path.join(__dirname, '..', 'templates', 'verification.html'), 'utf8');
      textTemplate = 'Registration';
    } else if (template === 'Welcome') {
      userTemplate = await fs.readFile(path.join(__dirname, '..', 'templates', 'registration.html'), 'utf8');
      textTemplate = 'Welcome';
    } else if (template === 'Forgot Password') {
      userTemplate = await fs.readFile(path.join(__dirname, '..', 'templates', 'forgot_password.html'), 'utf8');
      textTemplate = 'Forgot Password';
    } else {
      userTemplate = '<h1>Default Template</h1>';
      textTemplate = 'Default Template';
    }

    if (Object.keys(data).length > 0) {
      const handlebarsGenerator = handlebars.compile(userTemplate);
      userTemplate = handlebarsGenerator(data);
    }

    const info = await transporter.sendMail({
      from: `"Tea Chain" <${serverConfig.emailUser}>`,
      to,
      subject,
      text: textTemplate,
      html: userTemplate,
    });
    logger.info(NAMESPACE, 'sendEmail', info);
  } catch (err) {
    logger.error(NAMESPACE, 'sendEmail', err);
  }
};

export default { sendEmail };
