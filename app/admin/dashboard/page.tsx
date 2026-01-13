'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaBox, FaFolderOpen, FaTags, FaEnvelope, FaSignOutAlt, FaImage } from 'react-icons/fa';
import Card from '@/components/ui/Card';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      const res = await fetch('/api/admin/stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
      } else {
        router.push('/admin');
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/admin');
  };

  const menuItems = [
    { href: '/admin/products', icon: <FaBox />, label: 'Products', color: 'bg-blue-500' },
    { href: '/admin/categories', icon: <FaFolderOpen />, label: 'Categories', color: 'bg-green-500' },
    { href: '/admin/brands', icon: <FaTags />, label: 'Brands', color: 'bg-purple-500' },
    { href: '/admin/contacts', icon: <FaEnvelope />, label: 'Contact Forms', color: 'bg-orange-500' },
    { href: '/admin/banners', icon: <FaImage />, label: 'Banners', color: 'bg-pink-500' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#D4AF37]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5E6D3]/20">
      <div className="bg-[#001F3F] text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#D4AF37]">Admin Dashboard</h1>
            <p className="text-[#F5E6D3]">Pragati Distributors</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-blue-100 text-sm">Total Products</p>
                  <p className="text-4xl font-bold mt-2">{stats.totalProducts}</p>
                </div>
                <FaBox className="text-5xl opacity-50" />
              </div>
              <p className="text-sm text-blue-100">In Stock: {stats.activeProducts}</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-green-100 text-sm">Categories</p>
                  <p className="text-4xl font-bold mt-2">{stats.totalCategories}</p>
                </div>
                <FaFolderOpen className="text-5xl opacity-50" />
              </div>
              <p className="text-sm text-green-100">Active categories</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-purple-100 text-sm">Brands</p>
                  <p className="text-4xl font-bold mt-2">{stats.totalBrands}</p>
                </div>
                <FaTags className="text-5xl opacity-50" />
              </div>
              <p className="text-sm text-purple-100">Partner brands</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-orange-100 text-sm">New Contacts</p>
                  <p className="text-4xl font-bold mt-2">{stats.newContacts}</p>
                </div>
                <FaEnvelope className="text-5xl opacity-50" />
              </div>
              <p className="text-sm text-orange-100">Pending responses</p>
            </Card>
          </div>
        )}

        <h2 className="text-2xl font-bold text-[#001F3F] mb-6">Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card hover className="p-6 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`${item.color} w-16 h-16 rounded-lg flex items-center justify-center text-white text-3xl`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#001F3F]">{item.label}</h3>
                    <p className="text-gray-600 text-sm">Manage {item.label.toLowerCase()}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-[#001F3F] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link href="/admin/products" className="block p-3 bg-[#F5E6D3]/50 rounded-lg hover:bg-[#F5E6D3] transition-colors">
                <span className="text-[#001F3F] font-medium">➕ Add New Product</span>
              </Link>
              <Link href="/admin/categories" className="block p-3 bg-[#F5E6D3]/50 rounded-lg hover:bg-[#F5E6D3] transition-colors">
                <span className="text-[#001F3F] font-medium">➕ Add New Category</span>
              </Link>
              <Link href="/admin/brands" className="block p-3 bg-[#F5E6D3]/50 rounded-lg hover:bg-[#F5E6D3] transition-colors">
                <span className="text-[#001F3F] font-medium">➕ Add New Brand</span>
              </Link>
              <Link href="/admin/contacts" className="block p-3 bg-[#F5E6D3]/50 rounded-lg hover:bg-[#F5E6D3] transition-colors">
                <span className="text-[#001F3F] font-medium">📧 View Contact Submissions</span>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
