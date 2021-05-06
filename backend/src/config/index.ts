const dotenv = require('dotenv');

dotenv.config();

export default {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URI,
  emailUser: process.env.EMAIL_USER,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectURL: process.env.REDIRECT_URI,
  refreshToken: process.env.REFRESH_TOKEN,
};
