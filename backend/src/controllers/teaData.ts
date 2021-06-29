import { Request, Response } from 'express';
import TeaChainServices from '../services/TeaChainServices';

const retrieve = (req: Request, res: Response) => {
  const { id } = req.params;

  const result = TeaChainServices.retrieveData(id);

  if (result) {
    res.status(200).json({
      result: true,
      message: id,
    });
  } else {
    res.status(404).json({
      result: false,
      message: 'Invalid id',
    });
  }
};

export default { retrieve };
