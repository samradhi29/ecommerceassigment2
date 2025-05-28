"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const Address_1 = __importDefault(require("./routes/Address"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/address", Address_1.default);
const mongoUrl = process.env.MONGO_URL;
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
if (!mongoUrl) {
    console.error("MONGO_URL not found in environment variables.");
    process.exit(1);
}
mongoose_1.default.connect(mongoUrl)
    .then(() => console.log("MongoDB connected"))
    .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
});
exports.default = app;
