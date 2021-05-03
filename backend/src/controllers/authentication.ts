import { Request, Response } from 'express';
import UserProfileServices from '../services/UserProfileService';

const registrationMail = async (req: Request, res: Response) => {
  try {
    const result = await UserProfileServices.sendRegistrationLink(req.body);
    if (result) {
      res.status(200).json({
        result: true,
        message: result,
      });
    }
  } catch (err) {
    res.status(502).json({
      result: false,
      message: err,
    });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const result = await UserProfileServices.login(req.body);
    if (result.email && result.email.length > 3) {
      res.status(200).json({
        result: true,
        user: result,
      });
    } else {
      res.status(401).json({
        result: false,
        message: 'Wrong password',
      });
    }
  } catch (err) {
    if (err.message === 'User not found') {
      res.status(409).json({
        result: false,
        message: 'User not found',
      });
    } else {
      res.status(503).json({
        result: false,
        message: err.message,
      });
    }
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const result = await UserProfileServices.createUser(req.body);
    if (result) {
      res.status(200).json({
        result: true,
        user: result,
      });
    }
  } catch (err) {
    if (err.message === 'User exists') {
      res.status(409).json({
        result: false,
        message: 'User exists',
      });
    } else {
      res.status(503).json({
        result: false,
        message: err.message,
      });
    }
  }
};

export default { registrationMail, login, register };
