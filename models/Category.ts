import mongoose, { Document, Schema } from 'mongoose';

export interface ICategory extends Document {
  category_name: string;
  category_description: string;
  category_image: string;
  banner_image: string;
  meta_description: string;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema<ICategory>(
  {
    category_name: { type: String, required: true, unique: true },
    category_description: { type: String, default: '' },
    category_image: { type: String, default: '' },
    banner_image: { type: String, default: '' },
    meta_description: { type: String, default: '' },
    is_active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
