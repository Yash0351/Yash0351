'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`/api/products/${params.id}`);
      const data = await res.json();
      if (data.success) {
        setProduct(data.product);
        if (data.product.category_id) {
          fetchRelatedProducts(data.product.category_id._id);
        }
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProducts = async (categoryId: string) => {
    try {
      const res = await fetch(`/api/products?category=${categoryId}`);
      const data = await res.json();
      if (data.success) {
        setRelatedProducts(data.products.filter((p: any) => p._id !== params.id).slice(0, 4));
      }
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };

  const handleWhatsAppInquiry = () => {
    const message = `Hi, I'm interested in ${product?.product_name}. Can you provide more details?`;
    window.open(`https://wa.me/919000061008?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#D4AF37]"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="py-8 bg-[#F5E6D3]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#001F3F] transition-colors">
            <FaArrowLeft /> Back to Products
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-[#001F3F] to-[#002a5c] flex items-center justify-center">
                  <span className="text-9xl">🔌</span>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-2 mb-4">
                {product.brand_id && (
                  <span className="px-3 py-1 bg-[#F5E6D3] text-[#001F3F] rounded-full text-sm font-medium">
                    {product.brand_id.brand_name}
                  </span>
                )}
                {product.category_id && (
                  <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#001F3F] rounded-full text-sm font-medium">
                    {product.category_id.category_name}
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-[#001F3F] mb-4">{product.product_name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div>
                  <span className="text-2xl text-gray-400 line-through">₹{product.mrp}</span>
                </div>
                <div>
                  <span className="text-4xl font-bold text-[#D4AF37]">₹{product.dealers_price}</span>
                  <p className="text-sm text-gray-600">Dealer Price</p>
                </div>
              </div>

              <div className="bg-[#F5E6D3]/30 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Master Packing</p>
                    <p className="text-lg font-bold text-[#001F3F]">{product.master_packing} {product.unit_type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Stock Status</p>
                    <span
                      className={`inline-block px-3 py-1 rounded text-sm font-semibold ${
                        product.stock_status === 'in_stock'
                          ? 'bg-green-100 text-green-700'
                          : product.stock_status === 'limited'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {product.stock_status === 'in_stock'
                        ? '✓ In Stock'
                        : product.stock_status === 'limited'
                        ? '⚠ Limited Stock'
                        : '✗ Out of Stock'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#001F3F] mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {product.specifications && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#001F3F] mb-3">Specifications</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{product.specifications}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleWhatsAppInquiry} className="flex-1 flex items-center justify-center gap-2">
                  <FaWhatsapp size={20} /> Inquire on WhatsApp
                </Button>
                <a href="tel:9000061008" className="flex-1">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <FaPhone /> Call: 9000061008
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[#F5E6D3]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-8">
              Related <span className="text-[#D4AF37]">Products</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct: any) => (
                <Link key={relatedProduct._id} href={`/products/${relatedProduct._id}`}>
                  <Card hover className="h-full">
                    <div className="h-48 bg-gradient-to-br from-[#001F3F] to-[#002a5c] flex items-center justify-center">
                      <span className="text-5xl">🔌</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#001F3F] mb-2 line-clamp-2">{relatedProduct.product_name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 line-through">₹{relatedProduct.mrp}</span>
                        <span className="text-xl font-bold text-[#D4AF37]">₹{relatedProduct.dealers_price}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
