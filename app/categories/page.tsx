'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      const data = await res.json();
      if (data.success) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-[#001F3F] to-[#002a5c] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Product <span className="text-[#D4AF37]">Categories</span>
            </h1>
            <p className="text-xl text-[#F5E6D3] max-w-3xl mx-auto">
              Explore our wide range of kitchen appliance categories
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
              <p className="mt-4 text-gray-600">Loading categories...</p>
            </div>
          ) : categories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {categories.map((category: any, idx) => (
                <motion.div
                  key={category._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Link href={`/products?category=${category._id}`}>
                    <Card hover className="overflow-hidden h-full">
                      <div className="h-56 bg-gradient-to-br from-[#001F3F] to-[#002a5c] flex items-center justify-center">
                        <span className="text-7xl">📦</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-[#001F3F] mb-3">{category.category_name}</h3>
                        <p className="text-gray-600 mb-4">{category.category_description}</p>
                        <div className="flex items-center text-[#D4AF37] font-semibold">
                          <span>View Products</span>
                          <span className="ml-2">→</span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No categories available yet</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
