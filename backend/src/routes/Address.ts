import express from 'express';
import { createAddress, getAllAddresses } from '../controllers/address'

const router = express.Router();

router.post('/', createAddress);
router.get('/', getAllAddresses);

export default router;