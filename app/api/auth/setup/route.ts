import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { hashPassword } from '@/lib/auth';

export async function POST() {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({ email: 'admin@pragatidistributors.in' });
    if (existingAdmin) {
      return NextResponse.json({
        success: false,
        message: 'Admin already exists',
      });
    }

    const hashedPassword = await hashPassword('Admin@123');
    const admin = await Admin.create({
      email: 'admin@pragatidistributors.in',
      password_hash: hashedPassword,
      role: 'super_admin',
    });

    return NextResponse.json({
      success: true,
      message: 'Admin account created successfully',
      admin: {
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error('Setup error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
