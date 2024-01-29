// fetch-posted-jobs.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession();

  if (req.method === 'GET') {
    try {
      const jobs = await db.job.findMany({
        where: {
          createdByEmail: session?.user?.email,
        },
      });

      res.status(200).json({ jobs });
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
