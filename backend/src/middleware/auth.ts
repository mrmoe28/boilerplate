import { Request, Response, NextFunction } from 'express';
import { requireAuth as clerkRequireAuth, getAuth } from '@clerk/express';
import { createClerkClient } from '@clerk/backend';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

declare module 'express-serve-static-core' {
  interface Request {
    userId?: string;
    user?: any;
  }
}

export const requireAuth = clerkRequireAuth();

export const syncUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = getAuth(req);
    if (!auth || !auth.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    let user = await prisma.user.findUnique({
      where: { clerkId: auth.userId }
    });

    if (!user) {
      const clerkClient = createClerkClient({
        secretKey: process.env.CLERK_SECRET_KEY!
      });

      const clerkUserData = await clerkClient.users.getUser(auth.userId);

      user = await prisma.user.create({
        data: {
          clerkId: auth.userId,
          email: clerkUserData.emailAddresses[0]?.emailAddress || '',
          name: `${clerkUserData.firstName || ''} ${clerkUserData.lastName || ''}`.trim() || null,
          phone: clerkUserData.phoneNumbers[0]?.phoneNumber || null,
          imageUrl: clerkUserData.imageUrl || null,
        }
      });
    }

    req.userId = user.id;
    req.user = user;
    return next();
  } catch (error) {
    console.error('Error in syncUser middleware:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const authenticate = [requireAuth, syncUser];