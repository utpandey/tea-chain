import { Request, Response } from 'express';

const login = (req: Request, res: Response) => {
  res.status(200).json({
    message: true,
  });
};

const register = (req: Request, res: Response) => {
  res.status(200).json({
    message: true,
  });
};

export default { login, register };
