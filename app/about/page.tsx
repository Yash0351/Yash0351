'use client';

import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';
import Card from '@/components/ui/Card';

export default function AboutPage() {
  const values = [
    {
      icon: <FaAward className="text-5xl text-[#D4AF37]" />,
      title: 'Quality First',
      description: 'We partner only with trusted brands to deliver premium kitchen appliances',
    },
    {
      icon: <FaUsers className="text-5xl text-[#D4AF37]" />,
      title: 'Customer Focused',
      description: 'Your success is our priority. We provide exceptional service and support',
    },
    {
      icon: <FaHandshake className="text-5xl text-[#D4AF37]" />,
      title: 'Trust & Integrity',
      description: 'Built on honest relationships and transparent business practices',
    },
    {
      icon: <FaChartLine className="text-5xl text-[#D4AF37]" />,
      title: 'Growth Partnership',
      description: 'We grow together with our dealers through competitive pricing and support',
    },
  ];

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
              About <span className="text-[#D4AF37]">Pragati Distributors</span>
            </h1>
            <p className="text-xl text-[#F5E6D3] max-w-3xl mx-auto">
              Your Trusted Partner in Premium Kitchen Appliances Distribution
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#001F3F] mb-6">
                Our <span className="text-[#D4AF37]">Story</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Pragati Distributors has been a cornerstone in the kitchen appliances distribution industry, 
                  built on the foundation of quality, trust, and exceptional service. Our journey began with a 
                  simple mission: to provide dealers and retailers with access to premium kitchen appliances at 
                  competitive wholesale prices.
                </p>
                <p>
                  Over the years, we've established strong partnerships with leading kitchen appliance brands, 
                  ensuring that our clients receive only the finest products. Our expertise in mixer grinders 
                  and kitchen solutions has made us a preferred choice for businesses across the region.
                </p>
                <p>
                  We believe in growing together with our partners. Every dealer we work with becomes part of 
                  the Pragati family, receiving not just products, but comprehensive support, competitive pricing, 
                  and a commitment to their success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#001F3F] to-[#002a5c] p-12 rounded-2xl text-white"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">500+</div>
                  <div className="text-[#F5E6D3]">Happy Dealers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">50+</div>
                  <div className="text-[#F5E6D3]">Brand Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">1000+</div>
                  <div className="text-[#F5E6D3]">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">100%</div>
                  <div className="text-[#F5E6D3]">Quality Assured</div>
                </div>
              </div>
            </motion.div>
          </div>
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
              Our <span className="text-[#D4AF37]">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card hover className="p-6 text-center h-full">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-[#D4AF37]">Mission</span>
            </h2>
            <p className="text-xl text-[#F5E6D3] max-w-4xl mx-auto leading-relaxed">
              To empower dealers and retailers with premium kitchen appliances at competitive wholesale prices, 
              backed by exceptional service and unwavering commitment to quality. We strive to be more than just 
              a distributor – we aim to be a trusted partner in our clients' growth and success.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#001F3F] mb-6">
              Why Choose <span className="text-[#D4AF37]">Us?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                '🎯 Extensive product range from top brands',
                '💰 Competitive wholesale pricing',
                '🚀 Fast and reliable delivery',
                '🤝 Dedicated support team',
                '📦 Quality packaging and handling',
                '💼 Flexible payment options',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#F5E6D3]/50 p-6 rounded-lg"
                >
                  <p className="text-lg text-[#001F3F] font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
