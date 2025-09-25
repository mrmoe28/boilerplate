# Deployment Guide

## Vercel Deployment

This project is configured for automatic deployment on Vercel when connected to the GitHub repository.

### Required Environment Variables

#### Frontend (Vercel Environment Variables)
Set these in your Vercel dashboard under Project Settings > Environment Variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_API_URL=https://your-vercel-deployment.vercel.app
```

#### Backend (Vercel Environment Variables)
```
DATABASE_URL=postgresql://...  (Neon production database)
CLERK_SECRET_KEY=sk_live_...
CLERK_WEBHOOK_SECRET=whsec_...
CORS_ORIGIN=https://your-vercel-deployment.vercel.app
```

### Pre-Deployment Checklist

1. **Database Setup**
   - Create production database on Neon
   - Run migrations: `npx prisma migrate deploy`
   - Update DATABASE_URL in Vercel environment variables

2. **Clerk Setup**
   - Configure production domain in Clerk dashboard
   - Update webhook URLs to point to Vercel deployment
   - Copy production API keys to Vercel environment variables

3. **Build Verification**
   ```bash
   # Test frontend build
   cd frontend && npm run build
   
   # Test backend build
   cd backend && npm run build
   ```

4. **Environment Variables**
   - All production environment variables set in Vercel dashboard
   - No hardcoded secrets in code
   - CORS configured for production domain

### Automatic Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Run build processes for both frontend and backend
- Generate preview deployments for pull requests

### Manual Deployment

If needed, deploy manually using Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```

### Post-Deployment

1. **Test Authentication Flow**
   - Sign up/sign in functionality
   - User creation in database
   - Webhook processing

2. **Database Connection**
   - Test API endpoints
   - Verify database queries work
   - Check Prisma client generation

3. **Performance**
   - Monitor loading times
   - Check Core Web Vitals
   - Verify no console errors

### Troubleshooting

**Build Failures:**
- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json
- Ensure TypeScript builds without errors

**Runtime Errors:**
- Check function logs in Vercel dashboard
- Verify environment variables are set correctly
- Test database connection string format

**Authentication Issues:**
- Verify Clerk webhook URLs point to production
- Check CORS configuration
- Ensure JWT verification works with production keys