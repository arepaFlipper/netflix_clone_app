import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const response = await serverAuth(req);
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const movie_query = { take: 1, skip: randomIndex };
    const randomMovies = await prismadb.movie.findMany(movie_query);
    return res.status(200).json(randomMovies[0]);
  } catch (error) {
    return res.status(400).end();
  }
}
