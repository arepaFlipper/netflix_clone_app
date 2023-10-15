import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const response = await serverAuth(req);
    console.log(`👐%crandom.ts:12 - response`, 'font-weight:bold; background:#3cc300;color:#fff;'); //DELETEME
    console.log(response); // DELETEME
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const movie_query = { take: 1, skip: randomIndex };
    const randomMovies = await prismadb.movie.findMany(movie_query);
    return res.status(200).json(randomMovies[0]);
  } catch (error) {
    console.log(`🦔%crandom.ts:13 - error`, 'font-weight:bold; background:#40bf00;color:#fff;'); //DELETEME
    console.log(error); // DELETEME
    return res.status(400).end();
  }
}
