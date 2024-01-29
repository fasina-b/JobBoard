import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export  async function GET(req: NextApiRequest) {
  try {
    const jobs = await db.job.findMany();

    return NextResponse.json({ jobs }, { status: 200 });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
  
  }
