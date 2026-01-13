'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

export default function BrandsPage() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const res = await fetch('/api/brands');
      const data = await res.json();
      if (data.success) {
        setBrands(data.brands);
      }
    } catch (error) {
      console.error('Error fetching brands:', error);
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
              Our <span className="text-[#D4AF37]">Brands</span>
            </h1>
            <p className="text-xl text-[#F5E6D3] max-w-3xl mx-auto">
              Discover premium kitchen appliance brands we distribute
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
              <p className="mt-4 text-gray-600">Loading brands...</p>
            </div>
          ) : brands.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {brands.map((brand: any, idx) => (
                <motion.div
                  key={brand._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Link href={`/products?brand=${brand._id}`}>
                    <Card hover className="overflow-hidden h-full">
                      <div className="h-48 bg-gradient-to-br from-[#001F3F] to-[#002a5c] flex items-center justify-center p-6">
                        <span className="text-6xl">🏷️</span>
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold text-[#001F3F] mb-2">{brand.brand_name}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{brand.brand_description}</p>
                        <div className="text-[#D4AF37] font-semibold">
                          View Products →
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No brands available yet</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
