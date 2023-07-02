import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { Info, Project, Skill, Social } from '@/sanity/typing';
import { fetchInfo } from '@/utils/fetchInfo';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '@/utils/fetchSocials';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import { GetStaticProps, NextPage } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

type Props = {
  info: Info;
  projects: Project[];
  skills: Skill[];
  socials: Social[];
}; // creates names to refer already-made types

export default function Home({ info, projects, skills, socials }: Props) {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 bg-[#f8fdff] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-green-400  ">
      <Head>
        <title>Dat Doan</title>
      </Head>

      {/* header */}
      <Header socials={socials} />

      {/* hero */}
      <section className="snap-start" id="hero">
        <Hero info={info} />
      </section>

      {/* about */}
      <section className="snap-center" id="about">
        <About info={info} />
      </section>
      {/* projects */}
      <section className="snap-center" id="projects">
        <Projects projects={projects} />
      </section>

      {/* skills */}
      <section className="snap-center" id="skills">
        <Skills skills={skills} />
      </section>

      {/* contact */}
      <section className="snap-center" id="contact">
        <Contact />
      </section>

      <div className="sticky w-full cursor-pointer bottom-5">
        <div className="flex justify-center items-center">
          <Link href="#hero">
            <ChevronDoubleUpIcon className=" text-gray-300 hover:text-green-300 h-[2rem] w-[2rem]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const info: Info = await fetchInfo();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      info,
      socials,
      skills,
      projects,
    },
    revalidate: 60,
  };
};
