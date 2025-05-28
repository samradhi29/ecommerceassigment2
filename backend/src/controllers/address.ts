import { Request, Response } from 'express';
import Address from '../models/Address';

// Create new address
export const createAddress = async (req: Request, res: Response) => {
  try {
    const newAddress = new Address(req.body);
    await newAddress.save();
    res.status(201).json({ message: 'Address saved successfully', data: newAddress });
  } catch (error) {
    console.error('Error saving address:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all addresses
export const getAllAddresses = async (_req: Request, res: Response) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (error) {
    console.error('Error fetching addresses:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};