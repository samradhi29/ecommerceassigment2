"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAddresses = exports.createAddress = void 0;
const Address_1 = __importDefault(require("../models/Address"));
// Create new address
const createAddress = async (req, res) => {
    try {
        const newAddress = new Address_1.default(req.body);
        await newAddress.save();
        res.status(201).json({ message: 'Address saved successfully', data: newAddress });
    }
    catch (error) {
        console.error('Error saving address:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.createAddress = createAddress;
// Get all addresses
const getAllAddresses = async (_req, res) => {
    try {
        const addresses = await Address_1.default.find();
        res.status(200).json(addresses);
    }
    catch (error) {
        console.error('Error fetching addresses:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.getAllAddresses = getAllAddresses;
