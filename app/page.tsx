'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      const data = await res.json();
      if (data.success) {
        setCategories(data.categories.slice(0, 6));
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success) {
        setProducts(data.products.slice(0, 8));
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <section className="relative h-[600px] bg-gradient-to-br from-[#001F3F] via-[#002a5c] to-[#001F3F] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#D4AF37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-[#001F3F] font-bold text-6xl">P</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Pragati <span className="text-[#D4AF37]">Distributors</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F5E6D3] mb-8">
              Premium Kitchen Appliances | Trusted Excellence Since Years
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="flex items-center gap-2">
                  Explore Products <FaArrowRight />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-[#001F3F]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#F5E6D3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#001F3F] mb-4">
              Why Choose <span className="text-[#D4AF37]">Pragati Distributors</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your trusted partner for premium kitchen appliances with unmatched quality and service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🏆', title: 'Premium Quality', desc: 'Only the finest kitchen appliances from trusted brands' },
              { icon: '💼', title: 'Wholesale Prices', desc: 'Competitive dealer pricing for maximum profit margins' },
              { icon: '🚚', title: 'Reliable Service', desc: 'Fast delivery and exceptional customer support' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card hover className="p-8 text-center h-full">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#001F3F] mb-2">
                Featured <span className="text-[#D4AF37]">Categories</span>
              </h2>
              <p className="text-gray-600">Explore our wide range of product categories</p>
            </div>
            <Link href="/categories">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.length > 0 ? (
              categories.map((category: any) => (
                <Link key={category._id} href={`/categories/${category._id}`}>
                  <Card hover className="overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-[#001F3F] to-[#002a5c] flex items-center justify-center">
                      <span className="text-6xl">📦</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#001F3F] mb-2">{category.category_name}</h3>
                      <p className="text-gray-600 text-sm">{category.category_description}</p>
                    </div>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500">No categories available yet</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5E6D3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#001F3F] mb-2">
                Latest <span className="text-[#D4AF37]">Products</span>
              </h2>
              <p className="text-gray-600">Discover our newest additions</p>
            </div>
            <Link href="/products">
              <Button variant="outline">View All Products</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product: any) => (
                <Link key={product._id} href={`/products/${product._id}`}>
                  <Card hover className="h-full">
                    <div className="h-48 bg-gradient-to-br from-[#001F3F] to-[#002a5c] flex items-center justify-center">
                      <span className="text-5xl">🔌</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#001F3F] mb-2 line-clamp-2">{product.product_name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
                        <span className="text-xl font-bold text-[#D4AF37]">₹{product.dealers_price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded ${
                          product.stock_status === 'in_stock' ? 'bg-green-100 text-green-700' :
                          product.stock_status === 'limited' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {product.stock_status === 'in_stock' ? 'In Stock' :
                           product.stock_status === 'limited' ? 'Limited' : 'Out of Stock'}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-4 text-center py-12">
                <p className="text-gray-500">No products available yet</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner with <span className="text-[#D4AF37]">Pragati?</span>
            </h2>
            <p className="text-[#F5E6D3] text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied dealers and retailers. Get premium kitchen appliances at wholesale prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Get Started Today</Button>
              </Link>
              <a href="tel:9000061008">
                <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-[#001F3F]">
                  Call: 9000061008
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
