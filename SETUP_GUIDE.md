# Pragati Distributors - Setup Guide

## Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy the `.env.local` file and update the values:
```bash
# MongoDB URI (required)
MONGODB_URI=mongodb://localhost:27017/pragati_distributors
# Or use MongoDB Atlas connection string

# JWT Secret (required - generate a random string)
JWT_SECRET=your-random-secret-key-here

# Contact Info
BUSINESS_EMAIL=pragatidistributors.in@gmail.com
BUSINESS_PHONE=9000061008
BUSINESS_WHATSAPP=919000061008
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at http://localhost:3000

### 4. Setup Admin Account

**Option A: Using Browser**
Visit: http://localhost:3000/api/auth/setup

**Option B: Using cURL**
```bash
curl -X POST http://localhost:3000/api/auth/setup
```

This creates an admin account:
- **Email**: admin@pragatidistributors.in
- **Password**: Admin@123

### 5. Login to Admin Panel
1. Go to http://localhost:3000/admin
2. Login with the credentials above
3. **IMPORTANT**: Change your password in production!

### 6. Add Sample Data

#### Add a Category
1. Go to Admin Dashboard
2. (To be implemented: Admin Categories Management UI)
3. Or use API directly:

```bash
curl -X POST http://localhost:3000/api/categories \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "category_name": "Mixer Grinders",
    "category_description": "High-quality mixer grinders for all your kitchen needs",
    "category_image": "",
    "banner_image": "",
    "meta_description": "Browse our collection of premium mixer grinders"
  }'
```

#### Add a Brand
```bash
curl -X POST http://localhost:3000/api/brands \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "brand_name": "Prestige",
    "brand_description": "Leading kitchen appliances brand",
    "brand_logo": "",
    "brand_banner": ""
  }'
```

#### Add a Product
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "product_name": "Prestige Iris 750W Mixer Grinder",
    "category_id": "CATEGORY_ID_HERE",
    "brand_id": "BRAND_ID_HERE",
    "description": "Powerful 750W mixer grinder with 3 jars",
    "images": [],
    "mrp": 5999,
    "dealers_price": 4299,
    "master_packing": 6,
    "unit_type": "pieces",
    "stock_status": "in_stock",
    "specifications": "Motor: 750W\nJars: 3 (Liquidizing, Dry Grinding, Chutney)\nSpeed Control: 3 Speed + Pulse\nWarranty: 2 Years"
  }'
```

## MongoDB Setup

### Option 1: Local MongoDB
1. Install MongoDB: https://docs.mongodb.com/manual/installation/
2. Start MongoDB service:
   ```bash
   # On macOS
   brew services start mongodb-community
   
   # On Linux
   sudo systemctl start mongod
   
   # On Windows
   net start MongoDB
   ```
3. Use connection string: `mongodb://localhost:27017/pragati_distributors`

### Option 2: MongoDB Atlas (Cloud)
1. Create free account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Add database user
4. Whitelist IP addresses (or use 0.0.0.0/0 for development)
5. Get connection string and update `.env.local`
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pragati_distributors
   ```

## Features to Implement

The following features have been planned but not yet implemented:

### Admin Management Pages
- [ ] `/admin/products` - Products CRUD interface
- [ ] `/admin/categories` - Categories CRUD interface
- [ ] `/admin/brands` - Brands CRUD interface
- [ ] `/admin/contacts` - Contact form management
- [ ] `/admin/banners` - Banner management interface

### Additional Features
- [ ] Image upload functionality (Cloudinary/AWS S3)
- [ ] Email notifications for contact forms
- [ ] CSV export for contact submissions
- [ ] Product image gallery with zoom
- [ ] Advanced product filtering
- [ ] Order management system

## Troubleshooting

### MongoDB Connection Issues
- Check if MongoDB is running
- Verify connection string in `.env.local`
- Check network/firewall settings for MongoDB Atlas

### Build Errors
```bash
# Clear Next.js cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
# On macOS/Linux
lsof -ti:3000 | xargs kill -9

# On Windows
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

## Production Deployment Checklist

- [ ] Change default admin password
- [ ] Update JWT_SECRET to a strong random string
- [ ] Configure MongoDB with proper authentication
- [ ] Set up environment variables in hosting platform
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS properly
- [ ] Set up backup strategy for database
- [ ] Configure monitoring and logging
- [ ] Test all features thoroughly
- [ ] Update contact information and branding

## Support

For issues or questions:
- Email: pragatidistributors.in@gmail.com
- Phone: 9000061008
- WhatsApp: 919000061008
