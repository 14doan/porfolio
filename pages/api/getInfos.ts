import { Info } from '@/sanity/typing';
import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

const query = groq`
*[_type=="info"][0]
`;

type Data = {
  info: Info[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const info: Info[] = await sanityClient.fetch(query);
  res.status(200).json({ info });
}
