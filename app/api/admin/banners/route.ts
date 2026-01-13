import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Banner from '@/models/Banner';
import { verifyToken } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');

    const filter: any = {};
    if (page) filter.page = page;

    const banners = await Banner.find(filter);
    return NextResponse.json({ success: true, banners });
  } catch (error) {
    console.error('Get banners error:', error);
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

    const existingBanner = await Banner.findOne({ page: data.page });
    if (existingBanner) {
      const updatedBanner = await Banner.findByIdAndUpdate(
        existingBanner._id,
        data,
        { new: true }
      );
      return NextResponse.json({ success: true, banner: updatedBanner });
    }

    const banner = await Banner.create(data);
    return NextResponse.json({ success: true, banner }, { status: 201 });
  } catch (error) {
    console.error('Create/Update banner error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
