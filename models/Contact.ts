import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  product_inquiry?: string;
  status: 'new' | 'responded' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, default: '' },
    message: { type: String, required: true },
    product_inquiry: { type: String, default: '' },
    status: { type: String, enum: ['new', 'responded', 'archived'], default: 'new' },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
