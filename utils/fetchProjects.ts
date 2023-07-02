import { Project } from '@/sanity/typing';

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );
  const data = await res.json();
  const projects: Project[] = data.projects;
  // colon labels var with a 'type' Skill
  // defined via interface
  // [] means it should an array

  // console.log('Fetching', projects);

  return projects;
};
