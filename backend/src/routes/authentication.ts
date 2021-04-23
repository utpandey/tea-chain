import express from 'express';
import authentication from '../controllers/authentication';

const router = express.Router();

router.post('/login', authentication.login);

router.post('/register', authentication.register);

export default router;
