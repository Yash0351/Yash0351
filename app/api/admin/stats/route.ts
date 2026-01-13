import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import Category from '@/models/Category';
import Brand from '@/models/Brand';
import Contact from '@/models/Contact';
import { verifyToken } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get('authorization')?.replace('Bearer ', '');
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const [
      totalProducts,
      totalCategories,
      totalBrands,
      newContacts,
      activeProducts,
      outOfStock,
    ] = await Promise.all([
      Product.countDocuments(),
      Category.countDocuments({ is_active: true }),
      Brand.countDocuments({ is_active: true }),
      Contact.countDocuments({ status: 'new' }),
      Product.countDocuments({ stock_status: 'in_stock' }),
      Product.countDocuments({ stock_status: 'out_of_stock' }),
    ]);

    return NextResponse.json({
      success: true,
      stats: {
        totalProducts,
        totalCategories,
        totalBrands,
        newContacts,
        activeProducts,
        outOfStock,
      },
    });
  } catch (error) {
    console.error('Get stats error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
