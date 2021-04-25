import mongoose from 'mongoose';
import serverConfig from '../config';
import logger from '../config/logger';

export default () => {
  const NAMESPACE = 'DATABASE CONNECTION';
  const connectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
  const connectionUri = serverConfig.databaseURL || '';
  mongoose.connect(connectionUri, connectionOptions)
    .then(() => logger.info(NAMESPACE, 'Connection to database has been established'))
    .catch((error) => logger.error(NAMESPACE, 'Connection could not be established', error));
};
