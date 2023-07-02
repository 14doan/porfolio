import { Info } from '@/sanity/typing';

export const fetchInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getInfos`);
  const data = await res.json();
  const info: Info = data.info;
  // colon labels var with a 'type' Skill
  // defined via interface

  // console.log('Fetching', info);

  return info;
};
