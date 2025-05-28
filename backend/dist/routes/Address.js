"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const address_1 = require("../controllers/address");
const router = express_1.default.Router();
router.post('/', address_1.createAddress);
router.get('/', address_1.getAllAddresses);
exports.default = router;
