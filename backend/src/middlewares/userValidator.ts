import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import logger from '../config/logger';

const NAMESPACE = 'USER VALIDATOR';

interface ErrorMessage {
  [key: string]: string,
}

const loginValidationRules = () => [
  body('username').isEmail(),
  body('password').isHash('md5'),
];

const registerValidationRules = () => [
  body('username').isEmail(),
  body('password').isHash('md5'),
  body('type').isIn(['Producer', 'Farmer']),
];

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  logger.error(NAMESPACE, 'validate function', errors);
  const responseMessage = errors.array().map((err) => {
    const errMessage: ErrorMessage = {};
    errMessage[err.param] = err.msg;
    return errMessage;
  });
  res.status(422).json({
    errors: responseMessage,
  });
};

export default { loginValidationRules, registerValidationRules, validate };
