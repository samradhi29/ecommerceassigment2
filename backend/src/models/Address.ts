import mongoose, { Document, Schema } from 'mongoose';

// TypeScript interface
export interface IAddress extends Document {
  firstName: string;
  lastName: string;
  streetAddress: string;
  aptNo?: string;       // Optional
  state: string;
  zip: string;
}

// Mongoose Schema
const AddressSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  streetAddress: { type: String, required: true },
  aptNo: { type: String }, // Optional
  state: { type: String, required: true },
  zip: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.model<IAddress>('Address', AddressSchema);