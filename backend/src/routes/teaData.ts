import express from 'express';
import teaData from '../controllers/teaData';

const router = express.Router();

router.get('/:id', teaData.retrieve);

export default router;
