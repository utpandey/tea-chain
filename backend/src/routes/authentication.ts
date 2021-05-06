import express from 'express';
import authentication from '../controllers/authentication';
import userValidator from '../middlewares/userValidator';

const router = express.Router();

router.get('/verification', userValidator.verificationCodeValidationRules(), userValidator.validate, authentication.verifyUser);

router.post('/registrationLink', userValidator.linkValidationRules(), userValidator.validate, authentication.registrationMail);

router.post('/login', userValidator.loginValidationRules(), userValidator.validate, authentication.login);

router.post('/register', userValidator.registerValidationRules(), userValidator.validate, authentication.register);

export default router;
