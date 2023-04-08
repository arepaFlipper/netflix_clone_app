import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const authentication_response = await serverAuth(req);
    console.log(`🤱%cindex.ts:12 - authentication_response`, 'font-weight:bold; background:#3cc300;color:#fff;'); //DELETEME
    console.log(authentication_response); // DELETEME
    const movies = await prismadb.movie.findMany();
    return res.status(200).json(movies);
  } catch (error) {
    console.log(`🤌%cindex.ts:17 - error`, 'font-weight:bold; background:#4fb000;color:#fff;'); //DELETEME
    console.log(error); // DELETEME
    return res.status(400).end();
  }
}
