# Full Stack Application

A modern full-stack application built with Next.js 15, Express.js, TypeScript, Prisma, and Clerk authentication.

## Tech Stack

### Frontend
- Next.js 15 (React framework)
- TypeScript
- Clerk (Authentication)
- Tailwind CSS (Styling)

### Backend
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL (Neon)
- Clerk (Authentication)

## Project Structure

```
fullstack-test/
├── frontend/          # Next.js 15 React application
├── backend/           # Express.js TypeScript API
├── .env               # Root environment variables
├── .gitignore         # Git ignore rules
├── README.md          # Project documentation
├── CLAUDE.md          # Development guide for Claude Code
└── .cursorrules       # IDE development rules
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (Neon recommended)
- Clerk account for authentication

### Installation

1. Clone the repository
2. Install dependencies for both frontend and backend:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables (see Environment Variables section)

4. Set up the database:

```bash
cd backend
npm run prisma:generate
npm run prisma:dev
```

5. Start development servers:

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

The backend will run on http://localhost:3001
The frontend will run on http://localhost:3000

## Environment Variables

### Backend (.env)
```
DATABASE_URL="postgresql://..."
CLERK_SECRET_KEY="sk_live_..."
CLERK_WEBHOOK_SECRET="whsec_..."
CORS_ORIGIN="http://localhost:3000"
PORT=3001
```

### Frontend (.env.local)
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_live_..."
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

## Available Scripts

### Backend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:dev` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run start` - Start production server

## Deployment

### Vercel Deployment (Recommended)

This project is optimized for Vercel deployment:

1. **Connect to Vercel**:
   - Link your GitHub repository to Vercel
   - Vercel will automatically detect the Next.js frontend

2. **Environment Variables**:
   - Set production environment variables in Vercel dashboard
   - See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete list

3. **Database Setup**:
   ```bash
   # Production database migration
   npx prisma migrate deploy
   ```

4. **Automatic Deployments**:
   - Push to `main` branch triggers production deployment
   - Pull requests create preview deployments

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Development Guidelines

See [CLAUDE.md](./CLAUDE.md) for detailed development guidelines and best practices.

## License

MIT