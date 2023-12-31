import { NextApiRequest, NextApiResponse } from 'next';
import { without } from 'lodash';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/libs/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req, res);
      const { movieId } = req.body;

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
      const { currentUser } = await serverAuth(req, res);
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
    return res.status(400).end();
  }

}
