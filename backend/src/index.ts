import express from 'express';
import serverConfig from './config';
import logger from './config/logger';
import requestLogger from './middlewares/requestLogger';
import authentication from './routes/authentication';

const NAMESPACE = 'SERVER';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);
app.use('/authentication', authentication);

app.listen(serverConfig.port, () => logger.info(NAMESPACE, 'Server is listening on port:', serverConfig.port));
