import express from 'express';
import serverConfig from './config';
import logger from './config/logger';

const NAMESPACE = 'SERVER';
const app = express();
app.use(express.json());

app.listen(serverConfig.port, () => logger.info(NAMESPACE, 'Server is listening on port:', serverConfig.port));
