'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    product_inquiry: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          product_inquiry: '',
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.message || 'Failed to send message');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
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
              Contact <span className="text-[#D4AF37]">Us</span>
            </h1>
            <p className="text-xl text-[#F5E6D3] max-w-3xl mx-auto">
              Get in touch with us for any inquiries or business partnerships
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FaPhone className="text-4xl text-[#D4AF37]" />,
                title: 'Phone',
                info: '9000061008',
                link: 'tel:9000061008',
              },
              {
                icon: <FaEnvelope className="text-4xl text-[#D4AF37]" />,
                title: 'Email',
                info: 'pragatidistributors.in@gmail.com',
                link: 'mailto:pragatidistributors.in@gmail.com',
              },
              {
                icon: <FaWhatsapp className="text-4xl text-[#D4AF37]" />,
                title: 'WhatsApp',
                info: 'Chat with us',
                link: 'https://wa.me/919000061008',
              },
            ].map((contact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <a href={contact.link} target={contact.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                  <Card hover className="p-8 text-center h-full">
                    <div className="flex justify-center mb-4">{contact.icon}</div>
                    <h3 className="text-xl font-bold text-[#001F3F] mb-2">{contact.title}</h3>
                    <p className="text-gray-600 break-words">{contact.info}</p>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#001F3F] mb-6">
                Send us a <span className="text-[#D4AF37]">Message</span>
              </h2>

              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="Subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Product Inquiry (Optional)</label>
                  <input
                    type="text"
                    name="product_inquiry"
                    value={formData.product_inquiry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="Specific product you're interested in"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <Button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2">
                  {loading ? 'Sending...' : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#001F3F] mb-6">
                Visit <span className="text-[#D4AF37]">Our Location</span>
              </h2>
              
              <div className="bg-[#F5E6D3]/30 p-8 rounded-lg mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <FaMapMarkerAlt className="text-3xl text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl text-[#001F3F] mb-2">Our Office</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Pragati Distributors<br />
                      Kitchen Appliances Distribution Center<br />
                      [Your Address Here]
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#D4AF37]/20 pt-6">
                  <h3 className="font-bold text-lg text-[#001F3F] mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Monday - Saturday:</strong> 9:00 AM - 7:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>

              <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6322856324097!2d78.48624931487767!3d17.385044688065224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjIiTiA3OMKwMjknMTguOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
