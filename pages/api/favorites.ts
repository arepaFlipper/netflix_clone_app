import { NextApiRequest, NextApiResponse } from 'next';

import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req);
    const favorites_query = { where: { id: { in: currentUser?.favoriteIds } } };
    const favoriteMovies = await prismadb.movie.findMany(favorites_query);
    return res.status(200).json(favoriteMovies);
  } catch (error) {
    console.log(`🆚%cfavorites.ts:18 - error`, 'font-weight:bold; background:#53ac00;color:#fff;'); //DELETEME
    console.log(error); // DELETEME
    return res.status(400).end();
  }
}
