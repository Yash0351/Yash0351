import mongoose, { Document, Schema } from 'mongoose';

export interface IBanner extends Document {
  page: 'home' | 'categories' | 'brands';
  image_url: string;
  title?: string;
  subtitle?: string;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BannerSchema = new Schema<IBanner>(
  {
    page: { type: String, enum: ['home', 'categories', 'brands'], required: true, unique: true },
    image_url: { type: String, required: true },
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    is_active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Banner || mongoose.model<IBanner>('Banner', BannerSchema);
