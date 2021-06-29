import express from 'express';
import cors from 'cors';
import serverConfig from './config';
import logger from './config/logger';
import requestLogger from './middlewares/requestLogger';
import authentication from './routes/authentication';
import teaData from './routes/teaData';
import server from './models';

const NAMESPACE = 'SERVER';

const app = express();
server();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(requestLogger);
app.use('/authentication', authentication);
app.use('/teaData', teaData);

app.listen(serverConfig.port, () => logger.info(NAMESPACE, 'Server is listening on port:', serverConfig.port));
