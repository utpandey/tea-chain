const dotenv = require('dotenv');

dotenv.config();

export default {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URI,
  databaseUser: process.env.DATABASE_USERNAME,
  databasePass: process.env.DATABASE_PASSWORD,
  databaseHost: process.env.DATABASE_HOST,
  databasePort: process.env.DATABASE_PORT,
  databaseDb: process.env.DATABASE_DB,
  baseURL: process.env.BASE_URI,
  emailUser: process.env.EMAIL_USER,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectURL: process.env.REDIRECT_URI,
  refreshToken: process.env.REFRESH_TOKEN,
};
