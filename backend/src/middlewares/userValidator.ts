import { Request, Response, NextFunction } from 'express';
import { query, body, validationResult } from 'express-validator';
import logger from '../config/logger';
import { ErrorMessage } from '../types/User';

const NAMESPACE = 'USER VALIDATOR';

const verificationCodeValidationRules = () => [
  query('id').isString(),
  query('id').isLength({ min: 40, max: 40 }),
];

const linkValidationRules = () => [
  body('email').isEmail(),
];

const loginValidationRules = () => [
  body('email').isEmail(),
  body('password').isHash('md5'),
];

const forgotPasswordValidationRules = () => [
  body('email').isEmail(),
];

const updatePasswordValidationRules = () => [
  body('email').isEmail(),
  body('password').isHash('md5'),
  body('resetToken').isString(),
];

const registerValidationRules = () => [
  body('email').isEmail(),
  body('password').isHash('md5'),
  body('type').isIn(['Farmer', 'Manufacturer', 'Wholesaler', 'Distributer', 'Retailer']),
  body('profile.name').isString(),
  body('profile.picture').optional().isString(),
];

// eslint-disable-next-line consistent-return
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

export default {
  verificationCodeValidationRules,
  linkValidationRules,
  forgotPasswordValidationRules,
  updatePasswordValidationRules,
  loginValidationRules,
  registerValidationRules,
  validate,
};
