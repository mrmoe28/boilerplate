# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This is currently an empty project directory ready for a Full-Stack application setup.

## Full-Stack App Setup Guide

### Project Structure
When setting up a full-stack application, use this structure:
```
fullstack-test/
├── frontend/          # Next.js 15 React app
├── backend/           # Express.js TypeScript API
├── .env               # Root environment variables
├── .gitignore         # Project-wide ignore rules
├── README.md          # Project documentation
└── CLAUDE.md          # This file
```

### Initial Setup Checklist
1. Initialize Git repository immediately: `git init`
2. Create project structure before writing code
3. Set up version control with frequent commits
4. Configure environment variables properly

### Database Setup (Neon + Prisma)

#### Commands
```bash
# Backend Prisma commands
cd backend
npm run prisma:generate    # Generate Prisma client (run after schema changes)
npm run prisma:dev         # Create/run migrations
npm run prisma:studio      # Open Prisma Studio GUI
```

#### Prisma Schema Location
`backend/prisma/schema.prisma`

#### Critical Rules
- ALWAYS run `prisma generate` after schema changes
- Configure Prisma client output to `../src/generated/prisma`
- Include standard fields in models: id, createdAt, updatedAt

### Authentication (Clerk)

#### Dependencies
- Backend: `@clerk/backend @clerk/express svix`
- Frontend: `@clerk/nextjs`

#### Middleware Location
`backend/src/middleware/auth.ts`

### Development Rules

#### CRITICAL: Single Server Rule
- NEVER run multiple instances of the same development server
- ONLY ONE `npm run dev` command per project directory at a time
- Check for existing processes before starting servers

#### CRITICAL: No Turbopack Rule
- NEVER use Turbopack in development or build processes
- Always use standard Webpack-based Next.js build system
- Turbopack is explicitly disabled in next.config.mjs
- Keep builds clean and consistent

#### Process Management
```bash
# Check for existing processes
ps aux | grep -E "(npm run dev|nodemon|next dev)" | grep -v grep

# Kill existing processes if found
pkill -f "next dev"
pkill -f "nodemon"

# Check port usage
lsof -i :3000  # Frontend
lsof -i :3001  # Backend
```

### Common Commands

#### Frontend (Next.js)
```bash
cd frontend
npm install            # Install dependencies
npm run dev           # Start development server (port 3000)
npm run build         # Build for production
npm run lint          # Run linting
```

#### Backend (Express/TypeScript)
```bash
cd backend
npm install            # Install dependencies
npm run dev           # Start development server (port 3001)
npm run build         # Compile TypeScript
npm run lint          # Run linting
npm run seed          # Seed database (if configured)
```

### Environment Variables

#### Backend (.env)
```
DATABASE_URL="postgresql://..."
CLERK_SECRET_KEY="sk_live_..."
CLERK_WEBHOOK_SECRET="whsec_..."
CORS_ORIGIN="http://localhost:3000"
PORT=3001
```

#### Frontend (.env.local)
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_live_..."
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

### TypeScript Configuration

#### Key Settings
- Target: ES2020
- Module: commonjs
- Strict mode: true
- Output directory: ./dist
- Root directory: ./src

### Error Recovery Procedures

#### If compilation errors occur:
1. Regenerate Prisma client: `npm run prisma:generate`
2. Clean install dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript types: `npm run build`

#### If ports are blocked:
1. Find processes: `lsof -i :3000` or `lsof -i :3001`
2. Kill processes: `pkill -f "next dev"` or `pkill -f "nodemon"`

### Git Best Practices
- Commit early and often
- Use feature branches for new features
- Never commit .env files
- Resolve merge conflicts systematically

### Vercel Deployment

This project is configured for Vercel deployment with automatic builds.

#### Environment Variables (Vercel Dashboard)
```bash
# Frontend
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_API_URL=https://your-app.vercel.app

# Backend  
DATABASE_URL=postgresql://... (Neon production)
CLERK_SECRET_KEY=sk_live_...
CLERK_WEBHOOK_SECRET=whsec_...
CORS_ORIGIN=https://your-app.vercel.app
```

#### Deployment Process
1. Push to `main` branch triggers automatic deployment
2. Vercel builds both frontend (Next.js) and backend (Node.js)
3. Environment variables injected from Vercel dashboard
4. Database migrations run with `prisma migrate deploy`

#### Pre-Deployment Checklist
- [ ] Set all environment variables in Vercel dashboard
- [ ] Run database migrations: `npx prisma migrate deploy`
- [ ] Configure production database (Neon)
- [ ] Update Clerk webhook URLs to production domain
- [ ] Build both frontend and backend successfully
- [ ] Run linting and fix any issues
- [ ] Ensure no hardcoded secrets in code