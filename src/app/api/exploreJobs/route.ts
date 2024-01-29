import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';

export default async function ExploreJobs(req: NextApiRequest, res: NextApiResponse) {
  try {
    const jobs = await db.job.findMany();

    res.status(200).json({ jobs });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
export const handler = NextAuth(authOptions) as never;
export { handler as POST };