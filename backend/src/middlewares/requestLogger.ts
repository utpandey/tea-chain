import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

const NAMESPACE = 'REQUEST INFO';

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info(NAMESPACE, `[${req.method}] | '${req.url}'\n`);
  logger.info(NAMESPACE, 'Request Data: ', req.body);
  next();
  logger.info(NAMESPACE, `[${res.statusCode}] | [${res.socket}]`);
};

export default requestLogger;
