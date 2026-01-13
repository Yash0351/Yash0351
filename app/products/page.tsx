'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter } from 'react-icons/fa';
import Card from '@/components/ui/Card';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    brand: '',
    sort: 'createdAt',
    order: 'desc',
  });

  useEffect(() => {
    fetchCategories();
    fetchBrands();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.search) params.append('search', filters.search);
      if (filters.category) params.append('category', filters.category);
      if (filters.brand) params.append('brand', filters.brand);
      params.append('sort', filters.sort);
      params.append('order', filters.order);

      const res = await fetch(`/api/products?${params}`);
      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      const data = await res.json();
      if (data.success) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchBrands = async () => {
    try {
      const res = await fetch('/api/brands');
      const data = await res.json();
      if (data.success) {
        setBrands(data.brands);
      }
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
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
              Our <span className="text-[#D4AF37]">Products</span>
            </h1>
            <p className="text-xl text-[#F5E6D3] max-w-3xl mx-auto">
              Browse our extensive collection of premium kitchen appliances
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#F5E6D3]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={filters.search}
                      onChange={(e) => handleFilterChange('search', e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat: any) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.category_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    value={filters.brand}
                    onChange={(e) => handleFilterChange('brand', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    <option value="">All Brands</option>
                    {brands.map((brand: any) => (
                      <option key={brand._id} value={brand._id}>
                        {brand.brand_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    value={filters.sort}
                    onChange={(e) => handleFilterChange('sort', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    <option value="createdAt">Newest First</option>
                    <option value="product_name">Name A-Z</option>
                    <option value="dealers_price">Price Low-High</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product: any, idx) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Link href={`/products/${product._id}`}>
                    <Card hover className="h-full">
                      <div className="h-48 bg-gradient-to-br from-[#001F3F] to-[#002a5c] flex items-center justify-center">
                        <span className="text-5xl">🔌</span>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {product.brand_id && (
                            <span className="text-xs px-2 py-1 bg-[#F5E6D3] text-[#001F3F] rounded">
                              {product.brand_id.brand_name}
                            </span>
                          )}
                          {product.category_id && (
                            <span className="text-xs px-2 py-1 bg-[#D4AF37]/20 text-[#001F3F] rounded">
                              {product.category_id.category_name}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-[#001F3F] mb-2 line-clamp-2 min-h-[3.5rem]">
                          {product.product_name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
                          <span className="text-xl font-bold text-[#D4AF37]">₹{product.dealers_price}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Pack: {product.master_packing} {product.unit_type}</span>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              product.stock_status === 'in_stock'
                                ? 'bg-green-100 text-green-700'
                                : product.stock_status === 'limited'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {product.stock_status === 'in_stock'
                              ? 'In Stock'
                              : product.stock_status === 'limited'
                              ? 'Limited'
                              : 'Out of Stock'}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found matching your criteria</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
