import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    await serverAuth(req);
    const { movieId } = req.query;
    if (typeof movieId !== 'string') {
      throw new Error('Invalid ID');
    }
    if (!movieId) {
      throw new Error('Invalid ID');
    }
    const movie_query = { where: { id: movieId } };
    const movie = await prismadb.movie.findUnique(movie_query);
    if (!movie) {
      throw new Error('Invalid ID');
    };

    return res.status(200).json(movie);
  } catch (error) {
    console.log(`🦁%c[movieId].ts:27 - error`, 'font-weight:bold; background:#6c9300;color:#fff;'); //DELETEME
    console.log(error); // DELETEME
    return res.status(400).end();
  }

}
