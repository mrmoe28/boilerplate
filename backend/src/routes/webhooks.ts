import { Router, Request, Response, NextFunction } from 'express';
import { Webhook } from 'svix';
import { PrismaClient } from '../generated/prisma';

const router = Router();
const prisma = new PrismaClient();

const verifyClerkWebhook = async (req: Request, res: Response, next: NextFunction) => {
  if (!process.env.CLERK_WEBHOOK_SECRET) {
    return res.status(500).json({ error: 'Webhook secret not configured' });
  }

  const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
  try {
    const verifiedPayload = webhook.verify(JSON.stringify(req.body), {
      'svix-id': req.headers['svix-id'] as string,
      'svix-timestamp': req.headers['svix-timestamp'] as string,
      'svix-signature': req.headers['svix-signature'] as string,
    });
    req.body = verifiedPayload;
    return next();
  } catch (error) {
    console.error('Webhook verification failed:', error);
    return res.status(400).json({ error: 'Invalid webhook signature' });
  }
};

router.post('/clerk/users', verifyClerkWebhook, async (req: Request, res: Response) => {
  const event = req.body;

  try {
    switch (event.type) {
      case 'user.created':
      case 'user.updated':
        await prisma.user.upsert({
          where: { clerkId: event.data.id },
          create: {
            clerkId: event.data.id,
            email: event.data.email_addresses[0]?.email_address || '',
            name: `${event.data.first_name || ''} ${event.data.last_name || ''}`.trim() || null,
            imageUrl: event.data.image_url,
          },
          update: {
            email: event.data.email_addresses[0]?.email_address || '',
            name: `${event.data.first_name || ''} ${event.data.last_name || ''}`.trim() || null,
            imageUrl: event.data.image_url,
          }
        });
        break;
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ error: 'Error processing webhook' });
  }
});

export default router;