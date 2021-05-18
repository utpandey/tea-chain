import { Request, Response } from 'express';
import UserProfileServices from '../services/UserProfileService';

const verifyUser = async (req: Request, res: Response) => {
  try {
    const verificationToken = req.query.id as string;
    if (verificationToken) {
      const result = await UserProfileServices.verifyUser(verificationToken);
      if (result) {
        res.status(200).json({
          result: true,
          message: result,
        });
      }
    }
  } catch (err) {
    res.status(406).json({
      result: false,
      message: err.message,
    });
  }
};

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

const forgotPassword = async (req: Request, res: Response) => {
  try {
    const result = await UserProfileServices.forgotPassword(req.body);
    if (result) {
      res.status(200).json({
        result: true,
        message: 'email sent',
      });
    }
  } catch (err) {
    res.status(403).json({
      result: false,
      message: err,
    });
  }
};

const updatePassword = async (req: Request, res: Response) => {
  try {
    const result = await UserProfileServices.updatePassword(req.body);
    if (result) {
      res.status(200).json({
        result: true,
        message: result,
      });
    }
  } catch (err) {
    res.status(403).json({
      result: false,
      message: err.message,
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

export default {
  verifyUser, registrationMail, forgotPassword, updatePassword, login, register,
};
