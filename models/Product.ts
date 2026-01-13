import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  product_name: string;
  category_id: mongoose.Types.ObjectId;
  brand_id: mongoose.Types.ObjectId;
  description: string;
  images: string[];
  mrp: number;
  dealers_price: number;
  master_packing: number;
  unit_type: string;
  stock_status: 'in_stock' | 'out_of_stock' | 'limited';
  specifications: string;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    product_name: { type: String, required: true },
    category_id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    brand_id: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    mrp: { type: Number, required: true },
    dealers_price: { type: Number, required: true },
    master_packing: { type: Number, required: true },
    unit_type: { type: String, required: true, default: 'pieces' },
    stock_status: { 
      type: String, 
      enum: ['in_stock', 'out_of_stock', 'limited'], 
      default: 'in_stock' 
    },
    specifications: { type: String, default: '' },
    is_active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

ProductSchema.index({ product_name: 'text', description: 'text' });

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
