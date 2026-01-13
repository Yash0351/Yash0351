# Pragati Distributors - Premium Kitchen Appliances Website

A modern, professional Next.js business website featuring a luxury navy blue and gold color theme for Pragati Distributors, a kitchen appliances distributor.

## 🚀 Features

### Public Website
- **Home Page**: Hero banner, featured categories, latest products, call-to-action sections
- **Products Page**: Advanced filtering, search, sorting by category/brand/price
- **Product Detail**: Full specifications, pricing, WhatsApp inquiry integration
- **Categories Page**: Browse all product categories
- **Brands Page**: Explore partner brands
- **About Us**: Company story, values, and mission
- **Contact Page**: Contact form, Google Maps integration, WhatsApp chat button

### Admin Panel (Protected)
- **Dashboard**: Overview statistics, quick actions
- **Products Management**: Add, edit, delete products with full CRUD operations
- **Categories Management**: Manage product categories and banners
- **Brands Management**: Manage brand information and logos
- **Contact Forms**: View and manage customer inquiries
- **Banner Management**: Upload and manage banners for home, categories, and brands pages

### Premium Features
- 🎨 Luxury navy blue (#001F3F) and gold (#D4AF37) color scheme
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast loading with Next.js optimizations
- 🔒 Secure JWT-based authentication
- 💬 WhatsApp integration for instant customer communication
- 🗺️ Google Maps integration
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized with meta tags and structured data
- 📊 Stock status management
- 💰 MRP vs Dealer price display

## 📋 Technology Stack

- **Frontend**: Next.js 16, React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Icons**: React Icons
- **Image Optimization**: Next.js Image component

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd pragati-distributors
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create a `.env.local` file in the root directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/pragati_distributors
# OR use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pragati_distributors

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# NextAuth
NEXTAUTH_SECRET=your-nextauth-secret-key-change-this-in-production
NEXTAUTH_URL=http://localhost:3000

# Contact Information
BUSINESS_EMAIL=pragatidistributors.in@gmail.com
BUSINESS_PHONE=9000061008
BUSINESS_WHATSAPP=919000061008

# Cloudinary (Optional - for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

4. **Setup admin account**

First, start the development server:
```bash
npm run dev
```

Then, create the admin account by visiting:
```
http://localhost:3000/api/auth/setup
```

Or use this curl command:
```bash
curl -X POST http://localhost:3000/api/auth/setup
```

This will create an admin account with:
- **Email**: admin@pragatidistributors.in
- **Password**: Admin@123

5. **Access the application**
- **Public Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

## 📁 Project Structure

```
pragati-distributors/
├── app/
│   ├── about/              # About page
│   ├── admin/              # Admin panel pages
│   │   ├── dashboard/      # Admin dashboard
│   │   ├── products/       # Products management (to be created)
│   │   ├── categories/     # Categories management (to be created)
│   │   ├── brands/         # Brands management (to be created)
│   │   ├── contacts/       # Contact forms management (to be created)
│   │   └── banners/        # Banner management (to be created)
│   ├── api/                # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── products/       # Products CRUD
│   │   ├── categories/     # Categories CRUD
│   │   ├── brands/         # Brands CRUD
│   │   ├── contact/        # Contact form
│   │   └── admin/          # Admin-specific endpoints
│   ├── brands/             # Brands page
│   ├── categories/         # Categories page
│   ├── contact/            # Contact page
│   ├── products/           # Products listing & detail
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── sections/           # Page sections (to be created)
│   └── admin/              # Admin components (to be created)
├── lib/
│   ├── mongodb.ts          # Database connection
│   └── auth.ts             # Authentication utilities
├── models/                 # Mongoose models
│   ├── Product.ts
│   ├── Category.ts
│   ├── Brand.ts
│   ├── Admin.ts
│   ├── Contact.ts
│   └── Banner.ts
├── public/                 # Static assets
│   ├── images/
│   └── uploads/
└── .env.local              # Environment variables
```

## 🎨 Color Scheme

- **Primary (Navy Blue)**: #001F3F
- **Secondary (Gold)**: #D4AF37
- **Accent (Cream)**: #F5E6D3
- **Text**: White & Light Grey on dark backgrounds

## 📱 Contact Information

- **Phone**: 9000061008
- **Email**: pragatidistributors.in@gmail.com
- **WhatsApp**: 919000061008

## 🔐 Default Admin Credentials

- **Email**: admin@pragatidistributors.in
- **Password**: Admin@123

**⚠️ IMPORTANT**: Change these credentials after first login in production!

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway
- Render

## 📝 Database Schema

### Products
- product_name, category_id, brand_id, description, images, mrp, dealers_price, master_packing, unit_type, stock_status, specifications

### Categories
- category_name, category_description, category_image, banner_image, meta_description

### Brands
- brand_name, brand_description, brand_logo, brand_banner

### Admin
- email, password_hash, role, last_login

### Contact
- name, email, phone, subject, message, product_inquiry, status

### Banners
- page, image_url, title, subtitle

## 🛡️ Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected admin routes
- Input validation and sanitization
- CORS protection
- Environment variables for sensitive data

## 📈 Future Enhancements

- [ ] Image upload functionality with Cloudinary/AWS S3
- [ ] Email notifications for contact forms
- [ ] Product inventory management
- [ ] Order management system
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] PDF quote generation
- [ ] Bulk product import/export

## 🤝 Support

For support, email pragatidistributors.in@gmail.com or call 9000061008.

## 📄 License

© 2024 Pragati Distributors. All rights reserved.
