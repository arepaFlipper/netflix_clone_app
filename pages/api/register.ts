import bcrypt from 'bcrypt';
import {NextApiRequest, NextApiResponse} from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method === 'POST'){
    return res.status(405).end();
  }

  try {
    const {email,name, password} = req.body;
    const queryset = { where: { email } }

    const existingUser = await prismadb.user.findUnique(queryset);
    
    if(existingUser) {
      return res.status(422).json({error:'Email taken'});
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const create_query = { data: { email,name,hashedPassword,image:'',emailVerified: new Date() } }
    const user = await prismadb.user.create(create_query);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).end()
  }
}
