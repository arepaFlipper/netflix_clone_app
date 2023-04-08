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
    return res.status(400).end();
  }
}
