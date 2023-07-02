import { Skill } from '@/sanity/typing';

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const data = await res.json();
  const skills: Skill[] = data.skills;
  // colon labels var with a 'type' Skill
  // defined via interface
  // [] means it should an array

  // console.log('Fetching', skills);

  return skills;
};
