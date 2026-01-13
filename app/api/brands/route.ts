import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Brand from '@/models/Brand';
import { verifyToken } from '@/lib/auth';

export async function GET() {
  try {
    await connectDB();
    const brands = await Brand.find({ is_active: true }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, brands });
  } catch (error) {
    console.error('Get brands error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.headers.get('authorization')?.replace('Bearer ', '');
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    const data = await req.json();
    const brand = await Brand.create(data);

    return NextResponse.json({ success: true, brand }, { status: 201 });
  } catch (error) {
    console.error('Create brand error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
