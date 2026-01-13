import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Category from '@/models/Category';
import { verifyToken } from '@/lib/auth';

export async function GET() {
  try {
    await connectDB();
    const categories = await Category.find({ is_active: true }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, categories });
  } catch (error) {
    console.error('Get categories error:', error);
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
    const category = await Category.create(data);

    return NextResponse.json({ success: true, category }, { status: 201 });
  } catch (error) {
    console.error('Create category error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
