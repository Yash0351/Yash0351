import mongoose, { Document, Schema } from 'mongoose';

export interface IBrand extends Document {
  brand_name: string;
  brand_description: string;
  brand_logo: string;
  brand_banner: string;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BrandSchema = new Schema<IBrand>(
  {
    brand_name: { type: String, required: true, unique: true },
    brand_description: { type: String, default: '' },
    brand_logo: { type: String, default: '' },
    brand_banner: { type: String, default: '' },
    is_active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Brand || mongoose.model<IBrand>('Brand', BrandSchema);
