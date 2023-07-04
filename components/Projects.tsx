import { urlFor } from '@/sanity';
import { Project } from '@/sanity/typing';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  // const projects = [1, 2, 3, 4];

  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0 overflow-hidden "
    >
      <h3 className="absolute top-[4rem] tracking-[17px] pl-[17px] uppercase text-gray-600 text-xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-100 scrollbar-thumb-green-400">
        {projects?.map((p, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={p?._id}
            className="snap-center w-screen h-screen flex flex-col flex-shrink-0 space-y-5 justify-center items-center p-5 sm:p-20 md:p-44 "
          >
            <motion.div
              whileInView={{ opacity: [0, 0, 1], y: [-400, 0] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {' '}
              <Link href={p?.projectLink} target="_blank">
                <Image
                  src={urlFor(p?.projectImage).url()}
                  alt="chat project"
                  width={450}
                  height={450}
                />
              </Link>
            </motion.div>

            <div className="max-w-[32rem] text-center space-y-2">
              <h4 className="text-2xl font-semibold">
                Project {i + 1}: {p?.title}
              </h4>
              <div className=" flex items-center justify-center  space-x-4">
                {p?.technologies?.map((t) => (
                  <Image
                    key={t._id}
                    className="h-10 w-10"
                    src={urlFor(t.skillImage).url()}
                    alt="skill image"
                    width={450}
                    height={450}
                  />
                ))}
              </div>

              <p className="text-md md:text-left">{p?.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
