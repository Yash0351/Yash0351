# Deployment Guide - Pragati Distributors

## Deploying to Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications.

### Prerequisites
- GitHub/GitLab/Bitbucket account
- Vercel account (free tier available)
- MongoDB Atlas account (for database)

### Steps

1. **Prepare MongoDB Atlas**
   - Create a free cluster at https://www.mongodb.com/cloud/atlas
   - Create a database user
   - Whitelist all IPs (0.0.0.0/0) or specific IPs
   - Get your connection string

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Pragati Distributors website"
   git branch -M main
   git remote add origin https://github.com/yourusername/pragati-distributors.git
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: .next

4. **Add Environment Variables in Vercel**
   Go to Project Settings → Environment Variables and add:

   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pragati_distributors
   JWT_SECRET=your-production-jwt-secret-very-long-and-random
   NEXTAUTH_SECRET=your-nextauth-secret-very-long-and-random
   NEXTAUTH_URL=https://your-domain.vercel.app
   BUSINESS_EMAIL=pragatidistributors.in@gmail.com
   BUSINESS_PHONE=9000061008
   BUSINESS_WHATSAPP=919000061008
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `https://your-project.vercel.app`

6. **Setup Admin Account**
   - Visit: `https://your-domain.vercel.app/api/auth/setup`
   - This creates the initial admin account

7. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

## Alternative: Deploy to Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Environment Variables**
   Same as Vercel (see above)

3. **netlify.toml Configuration**
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

## Alternative: Deploy to Railway

1. **Connect Repository**
   - Go to https://railway.app
   - New Project → Deploy from GitHub
   - Select your repository

2. **Add Environment Variables**
   Same variables as Vercel

3. **Deploy**
   Railway will automatically detect Next.js and deploy

## Post-Deployment Checklist

### Security
- [ ] Change default admin password immediately
- [ ] Verify JWT_SECRET is strong and unique
- [ ] Enable 2FA for your hosting account
- [ ] Set up SSL/HTTPS (usually automatic)
- [ ] Configure CORS if needed

### Database
- [ ] Verify MongoDB connection works
- [ ] Set up database backups
- [ ] Monitor database performance
- [ ] Set appropriate connection limits

### Testing
- [ ] Test all pages load correctly
- [ ] Test admin login
- [ ] Test contact form submission
- [ ] Test WhatsApp integration
- [ ] Test on mobile devices
- [ ] Test product filtering and search
- [ ] Verify Google Maps loads

### SEO & Performance
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (if needed)
- [ ] Test page load speed
- [ ] Verify meta tags are correct
- [ ] Check mobile responsiveness
- [ ] Test on different browsers

### Content
- [ ] Add initial categories
- [ ] Add initial brands
- [ ] Add initial products
- [ ] Upload company logo
- [ ] Add banner images
- [ ] Update About Us content
- [ ] Add Google Maps location

## Custom Domain Setup

### For Vercel
1. Go to Project Settings → Domains
2. Add your domain (e.g., pragatidistributors.com)
3. Update DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

### For Cloudflare
If using Cloudflare:
1. Add your domain to Cloudflare
2. Update nameservers at registrar
3. In Cloudflare DNS, add:
   ```
   Type: CNAME
   Name: www
   Value: your-project.vercel.app
   Proxy: ON (orange cloud)
   ```

## Environment-Specific Configurations

### Development
```env
MONGODB_URI=mongodb://localhost:27017/pragati_distributors
JWT_SECRET=dev-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### Staging
```env
MONGODB_URI=mongodb+srv://staging-user:pass@cluster.mongodb.net/pragati_staging
JWT_SECRET=staging-secret-key-different-from-production
NEXTAUTH_URL=https://staging.yourdomain.com
```

### Production
```env
MONGODB_URI=mongodb+srv://prod-user:strongpass@cluster.mongodb.net/pragati_prod
JWT_SECRET=production-secret-key-very-long-and-random
NEXTAUTH_URL=https://pragatidistributors.com
```

## Monitoring & Maintenance

### Set up Monitoring
- Vercel Analytics (built-in)
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry)
- MongoDB Atlas monitoring

### Regular Maintenance
- Monitor database size and performance
- Review and respond to contact form submissions
- Update product inventory
- Backup database regularly
- Update dependencies monthly
- Review and update content

## Rollback Procedure

If something goes wrong:

1. **Vercel**: Go to Deployments → Click previous deployment → "Promote to Production"
2. **Check logs**: View deployment logs for errors
3. **Database**: Restore from backup if needed
4. **Environment Variables**: Verify all are set correctly

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com/
- Railway Docs: https://docs.railway.app/

## Contact

For deployment support:
- Email: pragatidistributors.in@gmail.com
- Phone: 9000061008
