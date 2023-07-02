import { Social } from '@/sanity/typing';

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const data = await res.json();
  const socials: Social[] = data.socials;
  // colon labels var with a 'type' Skill
  // defined via interface
  // [] means it should an array

  // console.log('Fetching', socials);

  return socials;
};
