import { NextApiRequest, NextApiResponse } from 'next';
import { without } from 'lodash';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      console.log(`😧%cfavorite.tsx:9 - req`, 'font-weight:bold; background:#2fd000;color:#fff;'); //DELETEME
      console.log(req); // DELETEME
      const { currentUser } = await serverAuth(req);
      const { movieId } = req.body;
      console.log(`🔒 %cfavorite.tsx:13 - movieId`, 'font-weight:bold; background:#40bf00;color:#fff;'); //DELETEME
      console.log(movieId); // DELETEME

      const movie_query = {
        where: {
          id: movieId,
        }
      }

      const existingMovie = await prismadb.movie.findUnique(movie_query);
      if (!existingMovie) {
        throw new Error('Invalid ID');
      }
      const user_query = {
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoriteIds: {
            push: movieId,
          }
        }
      };
      const user = await prismadb.user.update(user_query);
      return res.status(200).json(user);
    }

    if (req.method === 'DELETE') {
      const { currentUser } = await serverAuth(req);
      const { movieId } = req.body;

      const movie_query = {
        where: {
          id: movieId,
        }
      }
      const existingMovie = await prismadb.movie.findUnique(movie_query);
      if (!existingMovie) {
        throw new Error('Invalid ID')
      }
      const updatedFavoriteIDs = without(currentUser.favoriteIds, movieId);
      const update_query = {
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoriteIds: updatedFavoriteIDs,
        }
      }
      const updateUser = await prismadb.user.update(update_query);
      return res.status(200).json(updateUser);
    }

    return res.status(405).end();
  } catch (error) {
    console.log(`🖲️ %cfavorite.tsx:63 - error`, 'font-weight:bold; background:#a55a00;color:#fff;'); //DELETEME
    console.log(error); // DELETEME
    return res.status(400).end();
  }

}
